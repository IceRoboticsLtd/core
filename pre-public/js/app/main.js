define(function (require) {
    console.log('main called');
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/controller'),
        model = require('./model/model'),
		modelController = require('./modelController/modelController'),
        modelEvent = require('./modelEvent/modelEvent'),
		modelService = require('./modelService/modelService'),
//		serviceBus = require('./serviceBus/serviceBus'),
		view = require('./view/view'),
//		viewController = require('./viewController/viewController'),
//      viewEvent = require('./viewEvent/viewEvent'),
//		viewService = require('./viewService/viewService'),	
       	
        backbone = require('backbone'),
        underscore = require('underscore');
       
        //lodash = require('lodash'), //WAS require('./../../../bower_components/lodash/dist/lodash'),
//		postal = require('postal');
        //postaldiags = require('postal.diagnostics'), //WAS require('./../../../bower_components/postal.diagnostics/lib/postal.diagnostics.min'),
        //conduit = require('conduitjs'); //WAS require('./../../../bower_components/conduitjs/lib/conduit.min');


    //A fabricated API to show interaction of
    //common and specific pieces.
    console.log('model:');
    console.log(model);
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
        //Display backbone and underscore versions
        $('body')
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>')
			.append('<div>Example 1 - The World\'s Simplest Subscription<div class="results" id="example1"></div></div>');
    });
});
