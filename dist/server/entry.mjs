import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/src/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/about", "definedBy": "/src/pages/about/" },
    loadConfigValuesAll: () => import("./entries/src_pages_about.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/blog",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/blog", "definedBy": "/src/pages/blog/" },
    loadConfigValuesAll: () => import("./entries/src_pages_blog.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/src/pages/index/" },
    loadConfigValuesAll: () => import("./entries/src_pages_index.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/layoutPrincipal",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/layoutPrincipal", "definedBy": "/src/pages/layoutPrincipal/" },
    loadConfigValuesAll: () => import("./entries/src_pages_layoutPrincipal.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/blog/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/blog/@id", "definedBy": "/src/pages/blog/@id/" },
    loadConfigValuesAll: () => import("./entries/src_pages_blog_-id.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{007}~.js": {
    "file": "assets/static/onRenderClient.Dc--uV0n.css",
    "src": "_chunk-!~{007}~.js"
  },
  "_chunk-CCrpTgQx.js": {
    "file": "assets/chunks/chunk-CCrpTgQx.js",
    "name": "_onRenderClient",
    "css": [
      "assets/static/onRenderClient.Dc--uV0n.css"
    ]
  },
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.yb-CjCgD.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/src/pages/about",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/blog",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/layoutPrincipal",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/blog/@id"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/about": {
    "file": "assets/entries/src_pages_about.CpONl_4V.js",
    "name": "entries/src/pages/about",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CCrpTgQx.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/blog": {
    "file": "assets/entries/src_pages_blog.BiqPJbXa.js",
    "name": "entries/src/pages/blog",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/blog",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CCrpTgQx.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/blog/@id": {
    "file": "assets/entries/src_pages_blog_-id.BwO0We0M.js",
    "name": "entries/src/pages/blog/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/blog/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CCrpTgQx.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
    "file": "assets/entries/src_pages_index.C-M8d-zh.js",
    "name": "entries/src/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CCrpTgQx.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/layoutPrincipal": {
    "file": "assets/entries/src_pages_layoutPrincipal.C8KC-zBu.js",
    "name": "entries/src/pages/layoutPrincipal",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/layoutPrincipal",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CCrpTgQx.js"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.177",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
