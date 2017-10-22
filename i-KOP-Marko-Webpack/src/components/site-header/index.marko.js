// Compiled using marko@4.5.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    components_helpers = require("marko/dist/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/xz-oidc$1.0.0/src/components/site-header/index.marko", function() {
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

  out.w("<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"><span class=\"icon icon-bar\"></span><span class=\"icon icon-bar\"></span><span class=\"icon icon-bar\"></span></button>");

  asset_var_tag({
      values: [
          require.resolve("./logo.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img class=\"navbar-brand\"" +
          marko_attr("src", __src.url) +
          " alt=\"OIDC\">");
      }
    }, out, __component, "21");

  out.w("<span class=\"navbar-brand project-title\">" +
    marko_escapeXml(init.projectName) +
    "</span></div><div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"active\"><a href=\"/\">" +
    marko_escapeXml(init.headerTitle1) +
    "</a></li><li><a href=\"/\">" +
    marko_escapeXml(init.headerTitle2) +
    "</a></li><li><a href=\"/\">" +
    marko_escapeXml(init.headerTitle3) +
    "</a></li><li><a href=\"/login\">" +
    marko_escapeXml(init.headerTitle4) +
    "</a></li><li><a href=\"/\">" +
    marko_escapeXml(init.headerTitle5) +
    "</a></li></ul></div></div></div>");
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
