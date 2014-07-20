/*
 * MainBase
 */
define(function () {
    console.log('CORE: mainBase called');
    function mainBase(id) {
        this.id = id;
    };
    mainBase.prototype = {
        setRequire: function(_require) {
        	console.log('CORE: mainBase setRequire(_require) called: require =');
        	console.log(_require);
        	this.require = _require;
        },
        setJQuery: function(_jQuery) {
        	console.log('CORE: mainBase setJQuery(_jQuery) called');
        	this.jQuery = _jQuery;
        	this.$ = _JQuery;
        },
        setLib: function(lib) {
        	console.log('CORE: mainBase setLib(lib) called');
        	this.lib = lib;
        },
        setConfig: function(config) {
        	console.log('CORE: mainBase setConfig(config) called');
        	this.config = config;
        },
        setController: function(controller) {
        	console.log('CORE: mainBase setController(controller) called');
        	this.controller = controller;
        },
        setAppName: function(appName) {
        	console.log('CORE: mainBase setAppName(appName) called: appName =');
        	console.log(appName);
        	this.appName = appName;
        },  
        setElementId: function(elementId) {
        	console.log('CORE: mainBase setElementId(elementId) called: elementId =');
        	console.log(elementId);
        	this.elementId = elementId;
        }, 
        setModel: function(model) {
        	console.log('CORE: mainBase setModel(model) called');
        	this.model = model;
        },
        setModelController: function(modelController) {
        	console.log('CORE: mainBase setModelController(modelController) called');
        	this.modelController = modelController;
        },
        setModelEvent: function(modelEvent) {
        	console.log('CORE: mainBase setModelEvent(modelEvent) called');
        	this.modelEvent = modelEvent;
        },
        setModelService: function(modelService) {
        	console.log('CORE: mainBase setModelService(modelService) called');
        	this.modelService = modelService;
        },
        setServiceBus: function(serviceBus) {
        	console.log('CORE: mainBase setServiceBus(serviceBus) called');
        	this.serviceBus = serviceBus;
        },
        setView: function(view) {
        	console.log('CORE: mainBase setView(view) called');
        	this.view = view;
        },
        setViewController: function(viewController) {
        	console.log('CORE: mainBase setViewController(viewController) called');
        	this.viewController = viewController;
        },
        setViewService: function(viewService) {
        	console.log('CORE: mainBase setViewService(viewService) called');
        	this.viewService = viewService;
        },
        setViewEvent: function(viewEvent) {
        	console.log('CORE: mainBase setViewEvent(viewEvent) called');
        	this.viewEvent = viewEvent;
        },
        setBackbone: function(_backbone) {
        	console.log('CORE: mainBase setBackbone(_backbone) called');
        	this.backbone = _backbone;
        },
        setUnderscore: function(_underscore) {
        	console.log('CORE: mainBase setUnderscore(_underscore) called');
        	this.underscore = _underscore;
        },
        setLodash: function(_lodash) {
        	console.log('CORE: mainBase setLodash(_lodash) called');
        	this.lodash = _lodash;
        },
        setBootstrap: function(_bootstrap) {
        	console.log('CORE: mainBase setBootstrap(_bootstrap) called');
        	this.bootstrap = _bootstrap;
        },
        setExpect: function(_expect) {
        	console.log('CORE: mainBase setExpect(_expect) called');
        	this.expect = _expect;
        },
        setMocha: function(_mocha) {
        	console.log('CORE: mainBase setMocha(_mocha) called');
        	this.mocha = _mocha;
        },
        setJQueryPP: function(_jQueryPP) {
        	console.log('CORE: mainBase setJQueryPP(_jQueryPP) called');
        	this.jQueryPP = _jQueryPP;
        },
        setFrameWarp: function(_frameWarp) {
        	console.log('CORE: mainBase setFrameWarp(_frameWarp) called');
        	this.frameWarp = _frameWarp;
        },
        setViewIndex: function(viewIndex) {
        	console.log('CORE: mainBase setViewIndex(viewIndex) called');
        	this.viewIndex = viewIndex;
        },
        loadView: function(viewIndex) {
        	console.log('CORE: mainBase loadView(viewIndex) called');
        	this.controller.loadView(viewIndex);
        },
        renderView: function(elementId) {
        	console.log('CORE: mainBase renderView(elementId) called');
        	this.controller.renderView(elementId);
        },
        ready: function() {
        	console.log('CORE: mainBase ready() called');       	
		    // DOM ready
		//    $(function () {

				// JQuery
				if(typeof this.jQuery === 'undefined'){
					this.jQuery = this.require('jquery');
					this.$ = this.require('jquery');
				}
				else {
					this.jQuery = this.jQuery;
					this.$ = this.jQuery;
				}
				// Lib
				if(typeof this.lib === 'undefined'){
					this.lib = this.require('./lib');
				}
				else {
					this.lib = this.lib;
				}
				// Config
				if(typeof this.config === 'undefined'){
					this.config = this.require('./config/config');
				}
				else {
					this.config = this.config;
				}
				// Controller
				if(typeof this.controller === 'undefined'){
					this.controller = this.require('./controller/controller');
				}
				else {
					this.controller = this.controller;
				}
				// AppName
				if(typeof this.appName === 'undefined'){
					this.appName = 'unknown'; // default
				}
				else {
					this.appName = this.appName;
				}
				// ElementId
				if(typeof this.elementId === 'undefined'){
					this.elementId = 'unknown'; // default
				}
				else {
					this.elementId = this.elementId;
				}			
				// Model
				if(typeof this.model === 'undefined'){
					this.model = this.require('./model/model');
				}
				else {
					this.model = this.model;
				}
				// ModelController
				if(typeof this.modelController === 'undefined'){
					this.modelController = this.require('./modelController/modelController');
				}
				else {
					this.modelController = this.modelController;
				}		
				// ModelEvent
				if(typeof this.modelEvent === 'undefined'){
					this.modelEvent = this.require('./modelEvent/modelEvent');
				}
				else {
					this.modelEvent = this.modelEvent;
				}
				// ModelService
				if(typeof this.modelService === 'undefined'){
					this.modelService = this.require('./modelService/modelService');
				}
				else {
					this.modelService = this.modelService;
				}
				// ServiceBus
				if(typeof this.serviceBus === 'undefined'){
					this.serviceBus = this.require('./serviceBus/serviceBus');
				}
				else {
					this.serviceBus = this.serviceBus;
				}
				// View
				if(typeof this.view === 'undefined'){
					this.view = this.require('./view/view');
				}
				else {
					this.view = this.view;
				}
				// ViewController
				if(typeof this.viewController === 'undefined'){
					this.viewController = this.require('./viewController/viewController');
				}
				else {
					this.viewController = this.viewController;
				}
				// ViewService
				if(typeof this.viewService === 'undefined'){
					this.viewService = this.require('./viewService/viewService');
				}
				else {
					this.viewService = this.viewService;
				}
				// ViewEvent
				if(typeof this.viewEvent === 'undefined'){
					this.viewEvent = this.require('./viewEvent/viewEvent');
				}
				else {
					this.viewEvent = this.viewEvent;
				}
				// Backbone
				if(typeof this.backbone === 'undefined'){
					this.backbone = this.require('backbone');
				}
				else {
					this.backbone = this.backbone;
				}
				// Underscore
				if(typeof this.underscore === 'undefined'){
					this.underscore = this.require('underscore');
				}
				else {
					this.underscore = this.underscore;
				}
				// Lodash
				if(typeof this.lodash === 'undefined'){
					this.lodash = this.require('lodash');
				}
				else {
					this.lodash = this.lodash;
				}
				// Bootstrap
				if(typeof this.bootstrap === 'undefined'){
					this.bootstrap = this.require('bootstrap');
				}
				else {
					this.bootstrap = this.bootstrap;
				}
				// Expect
				if(typeof this.expect === 'undefined'){
					this.expect = this.require('expect');
				}
				else {
					this.expect = this.expect;
				}
				// Mocha
				if(typeof this.mocha === 'undefined'){
					this.mocha = this.require('mocha');
				}
				else {
					this.mocha = this.mocha;
				}
				// JQueryPP
				if(typeof this.jQueryPP === 'undefined'){
					this.jQueryPP = this.require('jquerypp.custom');
				}
				else {
					this.jQueryPP = this.jQueryPP;
				}
				// FrameWarp
				if(typeof this.frameWarp === 'undefined'){
					this.frameWarp = this.require('framewarp');
				}
				else {
					this.frameWarp = this.framewarp;
				}
			    /*
			     * STEP 1: Shared modules
			     */
			    // Set app
			    console.log('CORE: mainBase ready this.controller.setAppName(this.appName):');
			    console.log(this.appName);
			    this.controller.setAppName(this.appName);    
			    // Set config
			    console.log('CORE: mainBase ready this.controller.setConfig(this.config):');
			    console.log(this.config);
			    this.controller.setConfig(this.config);
			    // Set serviceBus
			    console.log('CORE: mainBase ready this.controller.setServiceBus(this.serviceBus):');
			    console.log(this.serviceBus);   
			    this.controller.setServiceBus(this.serviceBus);
			    /*
			     * STEP 2: Non-shared modules
			     */
			    // Set modelController, before modelService
			    console.log('CORE: mainBase ready this.controller.setModelController(this.modelController):');
			    console.log(this.modelController);
			    this.controller.setModelController(this.modelController); 
			    // Set modelService, before model
			    console.log('CORE: mainBase ready this.controller.setModelService(this.modelService):');
			    console.log(this.modelService); 
			    this.controller.setModelService(this.modelService); 
			    // Set model, after modelService
			    console.log('CORE: mainBase ready this.controller.setModel(this.model):');
			    console.log(this.model);
			    this.controller.setModel(this.model);
			    // Set modelEvent, after model
			    console.log('CORE: mainBase ready this.controller.setModelEvent(this.modelEvent):');
			    console.log(this.modelEvent);
			    this.controller.setModelEvent(this.modelEvent);
			    // Set viewController, before viewService
			    console.log('CORE: mainBase ready this.controller.setViewController(this.viewController):');
			    console.log(this.viewController);
			    this.controller.setViewController(this.viewController);
			    // Set viewService, before view
			    console.log('CORE: mainBase ready this.controller.setViewService(this.viewService):');
			    console.log(this.viewService);    
			    this.controller.setViewService(this.viewService);    
			    // Set view, after viewService
			    console.log('CORE: mainBase ready this.controller.setView(this.view):');
			    console.log(this.view);    
			    this.controller.setView(this.view);
			    // Set viewEvent, after view
			    console.log('CORE: mainBase ready this.controller.viewEvent(this.viewEvent):');
			    console.log(this.viewEvent);
			    this.controller.setViewEvent(this.viewEvent);
			    // Subscribe modelService
			    console.log('CORE: mainBase ready this.controller.subscribeModelService()');			    
			    this.controller.subscribeModelService();
			    // Subscribe viewService			    
			    console.log('CORE: mainBase ready this.controller.subscribeViewService()');				    
			    this.controller.subscribeViewService();
			    // LoadView, before renderView
			    console.log('CORE: mainBase ready this.controller.loadView(viewIndex):')
				console.log(this.viewIndex);
				this.controller.loadView(this.viewIndex);
				// RenderView, after loadView
		        console.log('CORE: mainBase ready this.controller.renderView(elementId):');
				console.log(this.elementId);	        
		        this.controller.renderView(this.elementId);

		        /* OLD
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
		        */
		//    });
        }
    };
    return mainBase;
});
