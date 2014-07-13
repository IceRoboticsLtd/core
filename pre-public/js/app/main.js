/*
 * Main
 */
define(function (require) {
    console.log('CORE: main called');
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
        bootstrap = require('bootstrap'), // bootstrap extends jquery
        expect = require('expect'),
        mocha = require('mocha');
//        conduitjs = require('conduit'); // depends on bootstrap, expect, and mocha
//        postal = require('postal');
        //postaldiags = require('postaldiags');

    // Backbone check
    console.log('CORE: backbone:');
    console.log(backbone);
    // JQuery check
    console.log('CORE: jquery:');
    console.log(jquery); 
    jquery.VERSION = jquery.fn.jquery;
    // Bootstrap check
    console.log('CORE: bootstrap:');
    console.log(bootstrap);
    // Expect check
    console.log('CORE: expect:');
    console.log(expect);
    expect.VERSION = expect.version;    
    // Mocha check
    console.log('CORE: mocha:');
    console.log(mocha);
    // ConduitJS check
//    console.log('CORE: conduitjs:');
//    console.log(conduitjs);
    // Postal check
//    console.log('CORE: postal');
//    console.log(postal);
    // PostalDiags check
//    console.log('postaldiags:');
//    console.log(postaldiags);
    /*
     * STEP 1: Shared modules
     */
    // Set app
    console.log('CORE: app:');
    console.log('calculator'); // TO DO: Make dynamic, not hard-coded
    controller.setApp('calculator');
    // Set config
    console.log('CORE: config:');
    console.log(config);
    controller.setConfig(config);
    // Set serviceBus
    console.log('CORE: serviceBus:');
    console.log(serviceBus);
    // assign postal to the serviceBus's serviceBus property
//    serviceBus.serviceBus = postal; 
    // The same serviceBus is used by both the ViewController and the ModelController    
    controller.setServiceBus(serviceBus);
    /*
     * STEP 2: Non-shared modules
     */
    // Set modelController
    console.log('CORE: modelController:');
    console.log(modelController);
    controller.setModelController(modelController); 
    // Set model
    console.log('CORE: model:');
    console.log(model);
    controller.setModel(model);
    // Set modelEvent
    console.log('CORE: modelEvent:');
    console.log(modelEvent);
    controller.setModelEvent(modelEvent);
    // Set modelService
    console.log('CORE: modelService:');
    console.log(modelService); 
    controller.setModelService(modelService);
    // Set viewController
    console.log('CORE: viewController:');
    console.log(viewController);
    controller.setViewController(viewController);
    // Set view
    console.log('CORE: view:');
    console.log(view);    
    controller.setView(view);
    // Set viewEvent
    console.log('CORE: viewEvent:');
    console.log(viewEvent);
    controller.setViewEvent(viewEvent);
    // Set viewService
    console.log('CORE: viewService:');
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
