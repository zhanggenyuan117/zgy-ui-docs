"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"Kitty","titleTemplate":"\u4E00\u4E2AVue3\u7EC4\u4EF6\u5E93","description":"","frontmatter":{"layout":"home","title":"Kitty","titleTemplate":"\u4E00\u4E2AVue3\u7EC4\u4EF6\u5E93","hero":{"name":"Kitty","text":"\u4E00\u4E2AVue3\u7EC4\u4EF6\u5E93","tagline":"\u6CA1\u5565\u7279\u70B9\u4EC5\u4F9B\u5B66\u4E60","image":{"src":"/logo.png","alt":"Kitty"},"actions":[{"theme":"brand","text":"\u5F00\u59CB","link":"/guide/"},{"theme":"alt","text":"\u5728 Gitee \u4E0A\u67E5\u770B","link":"https://gitee.com/geeksdidi/kittyui"}]},"features":[{"icon":"\u{1F4A1}","title":"Vue3\u7EC4\u4EF6\u5E93","details":"\u57FA\u4E8Evite\u6253\u5305\u548CTypeScript\u5F00\u53D1"},{"icon":"\u{1F4E6}","title":"\u4EC5\u4F9B\u5B66\u4E60\u4F7F\u7528","details":"\u503E\u5411\u4E8EVue3\u7EC4\u4EF6\u5E93\u7684\u5B66\u4E60\uFF0C\u8BF7\u52FF\u7528\u4E8E\u5B9E\u9645\u751F\u4EA7\u9879\u76EE"},{"icon":"\u{1F6E0}\uFE0F","title":"\u6309\u9700\u5F15\u5165","details":"\u76F4\u63A5\u652F\u6301\u6309\u9700\u5F15\u5165\u65E0\u9700\u914D\u7F6E\u4EFB\u4F55\u63D2\u4EF6\u3002"}]},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = index;
