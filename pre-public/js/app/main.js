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
        viewService = require('./viewService/viewService'),        
        viewEvent = require('./viewEvent/viewEvent'),
        backbone = require('backbone'),
        underscore = require('underscore'),
        lodash = require('lodash'),
        jquery = require('jquery'),
        bootstrap = require('bootstrap'); // bootstrap extends jquery
        expect = require('expect'),
        mocha = require('mocha');
        //conduitjs = require('conduit'), // depends on bootstrap, expect, and mocha
        //postal = require('postal'),
        //postaldiags = require('postaldiags');

    // Set config
    console.log('config:');
    console.log(config);
    controller.setConfig(config);
    // Backbone check
    console.log('backbone:');
    console.log(backbone);
    // JQuery check
    console.log('jquery:');
    console.log(jquery); 
    jquery.VERSION = jquery.fn.jquery;
    // Bootstrap check
    console.log('bootstrap:');
    console.log(bootstrap);
    // Expect check
    console.log('expect:');
    console.log(expect);
    // Mocha check
    console.log('mocha:');
    console.log(mocha);
    // ConduitJS check
//    console.log('conduitjs:');
//    console.log(conduitjs);
    // Postal check
//    console.log('postal');
//    console.log(postal);
    // PostalDiags check
//    console.log('postaldiags:');
//    console.log(postaldiags);

    // Set modelController
    console.log('modelController:');
    console.log(modelController);
    controller.setModelController(modelController); 
    // Set model
    console.log('model:');
    console.log(model);
    controller.setModel(model);
    // Set modelEvent
    console.log('modelEvent:');
    console.log(modelEvent);
    controller.setModelEvent(modelEvent);
    // Set modelService
    console.log('modelService:');
    console.log(modelService); 
    controller.setModelService(modelService);

    // assign postal to the serviceBus's serviceBus property
//    serviceBus.serviceBus = postal; 
    // The same serviceBus is used by both the ViewController and the ModelController    

    // Set serviceBus
    console.log('serviceBus:');
    console.log(serviceBus);
    controller.setServiceBus(serviceBus);
    // Set viewController
    console.log('viewController:');
    console.log(viewController);
    controller.setViewController(viewController);
    // Set view
    console.log('view:');
    console.log(view);    
    controller.setView(view);
    // Set viewEvent
    console.log('viewEvent:');
    console.log(viewEvent);
    controller.setViewEvent(viewEvent);
    // Set viewService
    console.log('viewService:');
    console.log(viewService);    
    controller.setViewService(viewService);

    //A fabricated API to show interaction of
    //common and specific pieces.

    // DOM ready
    $(function () {
        controller.renderView(lib.getBody());
        //Display backbone and underscore versions
        $('body')
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>')
            .append('<div>lodash version: ' + lodash.VERSION + '</div>')
            .append('<div>jquery version: ' + jquery.VERSION + '</div>')
            .append('<div>expect version: ' + expect.VERSION + '</div>')
            .append('<div>mocha version: ' + mocha.VERSION + '</div>')
        //    .append('<div>conduitjs version: ' + conduitjs.VERSION + '</div>')
        //    .append('<div>postal version: ' + postal.VERSION + '</div>')              
        //    .append('<div>postaldiags version: ' + postaldiags.VERSION + '</div>')                                       
		//	.append('<div>Example 1 - The World\'s Simplest Subscription<div class="results" id="example1"></div></div>');
    });

/*
    // DOM ready
    $(function() {
        require(["calculator"], function(calculator) {
            console.log('calculator is required');
        }); // TODO: Make this dynamic
    });
*/

});
