import { i as import1 } from "../chunks/chunk-CQDxzVtW.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "vike/server";
function Page() {
  const id = "1234567899";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Blog" }),
    /* @__PURE__ */ jsx("p", { children: "This app showcases a migration from Vite to Vike." }),
    /* @__PURE__ */ jsx("a", { href: "/layoutPrincipal", children: "Vamos al Layout principal" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("a", { href: `/blog/${id}`, children: "Articulo de Blog" })
  ] });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/src/renderer/+onRenderHtml.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/src/pages/blog/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
