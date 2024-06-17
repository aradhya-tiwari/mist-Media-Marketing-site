// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/",
    "/_astro/*",
    "/arrow.svg",
    "/brands\\At Ease Logo.png",
    "/brands\\Bhanu_s Academny.png",
    "/brands\\Logo PNG.png",
    "/brands\\Logo R1.png",
    "/brands\\panna logo 2.png",
    "/brands\\ROUND.png",
    "/brands\\The Hair Studio Logo 02.png",
    "/favicon.png",
    "/Hamburger.svg",
    "/imagePlaceholder.svg",
    "/logo_black.png",
    "/logo_white.png",
    "/logo_white.svg",
    "/mainBg.mp4",
    "/personImagePlaceholder.svg",
    "/Spacer1.jpg",
    "/blogs",
    "/contact",
    "/services",
    "/services/digi-marketing",
    "/services/foodphotography",
    "/services/graphics",
    "/services/photography",
    "/services/prbranding",
    "/services/weddingshoot"
  ]
};

// ../../AppData/Roaming/npm/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\aradh\\git\\MMM\\.wrangler\\tmp\\pages-djEoiI\\bundledWorker-0.22683566500235242.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\aradh\\AppData\\Roaming\\npm\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\aradh\\git\\MMM\\.wrangler\\tmp\\pages-djEoiI\\bundledWorker-0.22683566500235242.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=53e9wgfewyb.js.map
