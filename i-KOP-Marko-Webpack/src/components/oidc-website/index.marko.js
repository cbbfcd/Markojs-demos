// Compiled using marko@4.5.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    components_helpers = require("marko/dist/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/xz-oidc$1.0.0/src/components/oidc-website/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    site_header_template = marko_loadTemplate(require.resolve("../site-header")),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    site_header_tag = marko_loadTag(site_header_template),
    index_body_template = marko_loadTemplate(require.resolve("./components/index-body")),
    index_body_tag = marko_loadTag(index_body_template),
    site_footer_template = marko_loadTemplate(require.resolve("../site-footer")),
    site_footer_tag = marko_loadTag(site_footer_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_header_tag({}, out, __component, "0");

  index_body_tag({}, out, __component, "1");

  site_footer_tag({}, out, __component, "2");
}

marko_template._ = marko_renderer(render, {
    aa_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "../site-header",
      "./components/index-body",
      "../site-footer"
    ]
  };
