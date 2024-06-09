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
    "/brands\\Bhanu_s Academny black.png",
    "/brands\\Bhanu_s Academny.png",
    "/brands\\Divine-Laser-Hub__1_-removebg-preview.png",
    "/brands\\Logo PNG.png",
    "/brands\\Logo R.png",
    "/brands\\Logo R1.png",
    "/brands\\panna logo 2.png",
    "/brands\\ROUND.png",
    "/brands\\The Hair Studio Logo 01.png",
    "/brands\\The Hair Studio Logo 02.png",
    "/drive-download-20240410T083027Z-001.zip",
    "/favicon.png",
    "/Hamburger.svg",
    "/imagePlaceholder.svg",
    "/logo_black.png",
    "/logo_white.png",
    "/logo_white.svg",
    "/mainBg.mp4",
    "/personImagePlaceholder.svg",
    "/Spacer1.jpg",
    "/contact",
    "/services",
    "/services/clifford",
    "/services/rover",
    "/services/spot",
    "/test"
  ]
};

// ../../AppData/Roaming/npm/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\aradh\\git\\MMM\\.wrangler\\tmp\\pages-Ywky6W\\bundledWorker-0.46692326972092735.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\aradh\\AppData\\Roaming\\npm\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\aradh\\git\\MMM\\.wrangler\\tmp\\pages-Ywky6W\\bundledWorker-0.46692326972092735.mjs";
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
//# sourceMappingURL=vnk3taxnbg.js.map
