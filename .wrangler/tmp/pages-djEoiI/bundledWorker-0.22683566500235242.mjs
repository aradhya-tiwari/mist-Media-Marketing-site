// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { manifest } from "./manifest_bUW5wgyP.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/astrojs_cloudflare_Bz2-lg0M.mjs";
import { onRequest } from "./_noop-middleware.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var _page0 = () => import("./renderers.mjs").then((n) => n.h);
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@4.5.3_@types+node@20.12.7_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  renderers,
  middleware: onRequest
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.22683566500235242.mjs.map
