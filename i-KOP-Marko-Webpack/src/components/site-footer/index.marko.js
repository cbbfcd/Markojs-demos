// Compiled using marko@4.5.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    components_helpers = require("marko/dist/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/xz-oidc$1.0.0/src/components/site-footer/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    asset_var_tag = marko_loadTag(require("marko-magic/components/asset-var/renderer")),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  const init = require('../../init-data/init.js');

  out.w("<footer class=\"index-footer\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-3 col-sm-3\">");

  asset_var_tag({
      values: [
          require.resolve("../site-header/logo.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          " style=\"width:36px;height:42px\">");
      }
    }, out, __component, "23");

  out.w("</div><div class=\"col-md-4 col-sm-4\"><p>" +
    marko_escapeXml(init.add) +
    "</p></div><div class=\"col-md-offset-1 col-md-4 col-sm-offset-1 col-sm-3\"><p><a" +
    marko_attr("href", init.gitHub) +
    ">" +
    marko_escapeXml(init.copyright) +
    "</a></p><p>" +
    marko_escapeXml(init.qq) +
    "</p></div><div class=\"clearfix col-md-12 col-sm-12\"></div><div class=\"col-md-6 col-sm-6\"><div class=\"footer-copyright\"><p>© " +
    marko_escapeXml(init.copyright) +
    " </p> </div></div><div class=\"col-md-6 col-sm-6\"><ul class=\"social-icon\"><li><a href=\"#\" class=\"fa fa-facebook\"></a></li><li><a href=\"#\" class=\"fa fa-twitter\"></a></li><li><a href=\"#\" class=\"fa fa-linkedin\"></a></li></ul></div></div></div></footer>");
}

marko_template._ = marko_renderer(render, {
    aa_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    tags: [
      "marko-magic/components/asset-var/renderer"
    ]
  };
