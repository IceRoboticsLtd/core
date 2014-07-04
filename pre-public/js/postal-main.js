require.config({
    paths: {
        lodash: "./lib/lodash/dist/lodash",
        postal: "./lib/postal/postal",
        postaldiags: "./lib/postal.diagnostics/lib/postal.diagnostics",
        jquery: "./lib/jquery/jquery.min",
        conduitjs: "./lib/conduitjs/lib/conduit.min"
    }
});

require(["jquery"], function($) {
    $(function() {
        require(["postal-examples"]);
    });
});