globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_CzrguDsh.mjs').then(n => n.b);

export { page };
