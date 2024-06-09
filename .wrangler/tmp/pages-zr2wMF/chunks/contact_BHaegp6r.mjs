globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_CB2KDqVH.mjs').then(n => n.c);

export { page };
