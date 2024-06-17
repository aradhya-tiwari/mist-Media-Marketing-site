globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_DZcv-Wal.mjs').then(n => n.a);

export { page };
