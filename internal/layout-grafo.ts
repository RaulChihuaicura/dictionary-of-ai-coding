// Layout de fuerzas para el mapa de conceptos, calculado en tiempo de build.
//
// Se corre aca y no en el navegador por tres razones: la pagina no debe
// depender de d3 ni de ningun CDN (tiene que funcionar offline como archivo
// local), la carga es instantanea porque no hay simulacion que converger, y
// el resultado es determinista, asi que el mapa se ve igual en cada build y
// uno le toma memoria espacial. La semilla fija es lo que garantiza eso.

const SEMILLA = 20260831;

/** PRNG determinista: mismo layout en cada build. */
function mulberry32(a: number): () => number {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Punto = { x: number; y: number };

/**
 * Fruchterman-Reingold simplificado: repulsion entre todos los pares,
 * resortes en las aristas, y una gravedad suave al centro para que los
 * nodos sueltos no se escapen. Devuelve coordenadas normalizadas a 0..1.
 */
export function calcularLayout(
  n: number,
  aristas: [number, number][]
): Punto[] {
  const rnd = mulberry32(SEMILLA);
  const x = new Float64Array(n);
  const y = new Float64Array(n);

  // arranque en circulo con jitter: evita el caso degenerado de dos nodos
  // exactamente encima, donde la repulsion se dispara a infinito
  for (let i = 0; i < n; i++) {
    const a = (2 * Math.PI * i) / n;
    x[i] = Math.cos(a) * 300 + (rnd() - 0.5) * 60;
    y[i] = Math.sin(a) * 300 + (rnd() - 0.5) * 60;
  }

  // los nodos muy conectados se anclan mas al centro
  const grado = new Float64Array(n);
  for (const [a, b] of aristas) {
    grado[a]++;
    grado[b]++;
  }
  const gradoMax = Math.max(1, ...grado);

  const ITER = 800;
  const REPULSION = 9000;
  const LARGO = 70;
  const K_RESORTE = 0.015;
  const GRAVEDAD = 0.012;

  const fx = new Float64Array(n);
  const fy = new Float64Array(n);

  for (let paso = 0; paso < ITER; paso++) {
    const alpha = 1 - paso / ITER;
    fx.fill(0);
    fy.fill(0);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let dx = x[i] - x[j];
        let dy = y[i] - y[j];
        let d2 = dx * dx + dy * dy;
        if (d2 < 0.01) {
          dx = (rnd() - 0.5) * 0.1;
          dy = (rnd() - 0.5) * 0.1;
          d2 = dx * dx + dy * dy + 0.01;
        }
        const f = REPULSION / d2;
        const d = Math.sqrt(d2);
        const ux = (dx / d) * f;
        const uy = (dy / d) * f;
        fx[i] += ux;
        fy[i] += uy;
        fx[j] -= ux;
        fy[j] -= uy;
      }
    }

    for (const [a, b] of aristas) {
      const dx = x[b] - x[a];
      const dy = y[b] - y[a];
      const d = Math.hypot(dx, dy) || 0.01;
      const f = (d - LARGO) * K_RESORTE;
      const ux = (dx / d) * f;
      const uy = (dy / d) * f;
      fx[a] += ux;
      fy[a] += uy;
      fx[b] -= ux;
      fy[b] -= uy;
    }

    for (let i = 0; i < n; i++) {
      const peso = GRAVEDAD * (0.4 + grado[i] / gradoMax);
      fx[i] -= x[i] * peso;
      fy[i] -= y[i] * peso;
      const paso2 = Math.min(12, Math.hypot(fx[i], fy[i])) * alpha;
      const d = Math.hypot(fx[i], fy[i]) || 1;
      x[i] += (fx[i] / d) * paso2;
      y[i] += (fy[i] / d) * paso2;
    }
  }

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (let i = 0; i < n; i++) {
    if (x[i] < minX) minX = x[i];
    if (x[i] > maxX) maxX = x[i];
    if (y[i] < minY) minY = y[i];
    if (y[i] > maxY) maxY = y[i];
  }
  const anchoX = maxX - minX || 1;
  const anchoY = maxY - minY || 1;

  const pts: Punto[] = [];
  for (let i = 0; i < n; i++) {
    pts.push({
      x: Math.round(((x[i] - minX) / anchoX) * 10000) / 10000,
      y: Math.round(((y[i] - minY) / anchoY) * 10000) / 10000,
    });
  }
  return pts;
}
