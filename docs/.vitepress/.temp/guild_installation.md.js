"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u73AF\u5883\u652F\u6301","slug":"\u73AF\u5883\u652F\u6301"},{"level":2,"title":"\u7248\u672C","slug":"\u7248\u672C"},{"level":2,"title":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":2,"title":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","slug":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165"}],"relativePath":"guild/installation.md"}');
const _sfc_main = { name: "guild/installation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><h2 id="\u73AF\u5883\u652F\u6301" tabindex="-1">\u73AF\u5883\u652F\u6301 <a class="header-anchor" href="#\u73AF\u5883\u652F\u6301" aria-hidden="true">#</a></h2><p>\u7531\u4E8E Vue 3 \u4E0D\u518D\u652F\u6301 IE11\uFF0CElement Plus \u4E5F\u4E0D\u518D\u652F\u6301 IE11 \u6D4F\u89C8\u5668\u3002</p><h2 id="\u7248\u672C" tabindex="-1">\u7248\u672C <a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a></h2><p>KittyUI \u76EE\u524D\u8FD8\u5728\u5F00\u53D1\u4E2D</p><h2 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">\u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h2><p>\u5EFA\u8BAE\u60A8\u4F7F\u7528\u5305\u7BA1\u7406\u5668 (NPM, Yarn, pnpm) \u5B89\u88C5 KittyUI, \u7136\u540E\u60A8\u5C31\u53EF\u4EE5\u4F7F\u7528\u6253\u5305\u5DE5\u5177\uFF0C\u4F8B\u5982 Vite \u548C webpack</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"># NPM</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">$ npm install kitty-ui --save</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"># Yarn</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">$ yarn add kitty-ui</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"># pnpm</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">$ pnpm install kitty-ui</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"></span></span></code></pre></div><h2 id="\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" tabindex="-1">\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u6682\u4E0D\u652F\u6301</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guild/installation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var installation = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = installation;
