// Compiled using marko@4.5.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    components_helpers = require("marko/dist/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/xz-oidc$1.0.0/src/components/oidc-website/components/index-body/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    asset_var_tag = marko_loadTag(require("marko-magic/components/asset-var/renderer")),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  const init = require('../../../../init-data/init.js');

  out.w("<section id=\"home\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12 col-sm-12\"><h2>" +
    marko_escapeXml(init.description) +
    "</h2><hr></div><div class=\"blog-post-thumb\">");

  asset_var_tag({
      values: [
          require.resolve("./img1.jpg")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img class=\"img-responsive\"" +
          marko_attr("src", __src.url) +
          ">");
      }
    }, out, __component, "8");

  out.w("</div></div></div></section>");
}

marko_template._ = marko_renderer(render, {
    aa_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "marko-magic/components/asset-var/renderer"
    ]
  };
