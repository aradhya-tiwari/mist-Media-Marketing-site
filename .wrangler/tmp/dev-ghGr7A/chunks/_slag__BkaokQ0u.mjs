globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_DK5bI2PE.mjs').then(n => n._);

export { page };
