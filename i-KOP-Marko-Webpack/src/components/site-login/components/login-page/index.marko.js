// Compiled using marko@4.5.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    components_helpers = require("marko/dist/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/xz-oidc$1.0.0/src/components/site-login/components/login-page/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"container\"><div class=\"row\"><div class=\"col-md-offset-4 col-md-4 page-header\"><h2 class=\"start-page\">Start i-KOP</h2></div></div><div class=\"row\"><div class=\"col-md-offset-4 col-md-4 my-offset\"><form id=\"myform\" action=\"\" method=\"\"><div class=\"form-group\"><label for=\"inputUserName\">UserName</label><input type=\"text\" class=\"form-control\" id=\"inputUserName\" placeholder=\"username\"></div><div class=\"form-group\"><label for=\"inputPassWord\">PassWord</label><input type=\"password\" class=\"form-control\" id=\"inputPassWord\" placeholder=\"password\"></div><div class=\"form-group\"><button type=\"button\" class=\"btn btn-default btn-lg mybtn\">Submit</button></div></form></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    aa_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ]
  };
