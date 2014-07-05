/*
 * Main
 */
define(function (require) {
    console.log('main called');
    var $ = require('jquery'),
        lib = require('./lib'),
	    config = require('./config/config'),
        controller = require('./controller/controller'),
        model = require('./model/model'),
	    modelController = require('./modelController/modelController'),
        modelEvent = require('./modelEvent/modelEvent'),
	    modelService = require('./modelService/modelService'),
	    serviceBus = require('./serviceBus/serviceBus'),
	    view = require('./view/view'),
	    viewController = require('./viewController/viewController'),
        viewEvent = require('./viewEvent/viewEvent'),
	    viewService = require('./viewService/viewService'),
        backbone = require('backbone'),
        underscore = require('../underscore/underscore'),
        lodash = "../lodash/dist/lodash",
        postal = "postal",
        postaldiags = "postal.diagnostics",
        jquery = "../jquery/jquery.min",
        conduitjs = "../conduitjs/lib/conduit.min";
    // Set config
    console.log('config:');
    console.log(config);
    controller.setConfig(config);
    // Backbone check
    console.log('backbone');
    console.log(backbone);    
    // Postal check
    console.log('postal');
    console.log(postal);
//    serviceBus.serviceBus = postal; // Set postal as the serviceBus property of serviceBus
//    controller.setServiceBus(serviceBus);
    // Set model
    console.log('model:');
    console.log(model);
    controller.setModel(model);

    /*
    //A fabricated API to show interaction of
    //common and specific pieces.
    $(function () {
        controller.render(lib.getBody());
        //Display backbone and underscore versions
        $('body')
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>')
            .append('<div>lodash version: ' + lodash.VERSION + '</div>')
            .append('<div>postal version: ' + postal.VERSION + '</div>')
            .append('<div>postal.diagnostics version: ' + postaldiags.VERSION + '</div>')
            .append('<div>jquery version: ' + jquery.VERSION + '</div>')
            .append('<div>conduitjs version: ' + conduitjs.VERSION + '</div>')                                
			.append('<div>Example 1 - The World\'s Simplest Subscription<div class="results" id="example1"></div></div>');
    });
    */

    $(function() {
        require(["calculator"]); // TODO: Make this dynamic
    });

});
