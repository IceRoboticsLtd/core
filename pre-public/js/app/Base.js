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
        readyController: function(me, callback) {
        	console.log('CORE: mainBase readyController(me, callback) called');
        	var err = null;
			if(typeof this.controller === 'undefined') {
				this.require(['../app/controller/controller'], function (controller) {
                    console.log('CORE: mainBase: controller required');
                    console.log(controller);
                    this.controller = controller; 
                    callback(me, err, this.controller);
            	});
            }
			else {
				this.controller = this.controller;
				console.log(this.controller);
        		callback(me, err, this.controller);
        	}
    	},
        readyConfig: function(me, callback) {
        	console.log('CORE: mainBase readyConfig(me, callback) called');
        	var err = null;
			if(typeof this.config === 'undefined') {
				this.require(['../app/config/config'], function (config) {
                    console.log('CORE: mainBase: config required');
                    console.log(config);
                    this.config = config; 
                    callback(me, err, this.config);
            	});
            }
			else {
				this.config = this.config;
				console.log(this.config);
        		callback(me, err, this.config);
        	}
    	},
        readyServiceBus: function(me, callback) {
        	console.log('CORE: mainBase readyServiceBus(me, callback) called');
        	var err = null;
			if(typeof this.serviceBus === 'undefined') {
				this.require(['../app/serviceBus/serviceBus'], function (serviceBus) {
                    console.log('CORE: mainBase: serviceBus required');
                    console.log(serviceBus);
                    this.serviceBus = serviceBus; 
                    callback(me, err, this.serviceBus);
            	});
            }
			else {
				this.serviceBus = this.serviceBus;
				console.log(this.serviceBus);
        		callback(me, err, this.serviceBus);
        	}
    	},
        ready: function() {
        	console.log('CORE: mainBase ready() called');
        	var me = this; // contains the current context
        	// Controller
        	me.readyController(me, function(me, err, controller) {
        		if(err) {
        			console.log('CORE: mainBase readyController error:');
        			console.log(err);
        		}
        		else {
        			console.log('CORE: mainBase ready controller:');
        			console.log(controller);
        			me.controller = controller;
					// Set appName
				    console.log('CORE: mainBase ready me.controller.setAppName(me.appName):');
					// AppName
					if(typeof me.appName === 'undefined') {
						me.appName = 'unknown'; // default
						console.log(me.appName);
						me.controller.setAppName(me.appName);
					}
					else {
						me.appName = me.appName;
						console.log(me.appName);
						me.controller.setAppName(me.appName);
					}
					// Config
					me.readyConfig(me, function(me, err, config) {
						if(err) {
							console.log('CORE: mainBase readyConfig error:');
							console.log(err);
						}
						else {
							console.log('CORE: mainBase ready config:');
							console.log(config);
							me.config = config;
							// Set config
							console.log('CORE: mainBase ready me.controller.setConfig(me.config):');
							// Config
							if(typeof me.config === 'undefined') {
								me.config = {}; // default
								console.log(me.config);
								me.controller.setConfig(me.config);
							}
							else {
								me.config = me.config;
								console.log(me.config);
								me.controller.setConfig(me.config);
							}
							// ServiceBus
							me.readyServiceBus(me, function(me, err, serviceBus) {
								if(err) {
									console.log('CORE: mainBase readyServiceBus error:');
									console.log(err);
								}
								else {
									console.log('CORE: mainBase ready serviceBus:');
									console.log(serviceBus);
									me.serviceBus = serviceBus;
									// Set serviceBus
									console.log('CORE: mainBase ready me.controller.setServiceBus(me.serviceBus):');
									// ServiceBus
									if(typeof me.serviceBus === 'undefined') {
										me.serviceBus = {}; // default
										console.log(me.serviceBus);
										me.controller.setServiceBus(me.serviceBus);
									}
									else {
										me.serviceBus = me.serviceBus;
										console.log(me.serviceBus);
										me.controller.setServiceBus(me.serviceBus);
									}
									// more ...



								}
							});// eof ServiceBus
						}
					});// eof Config
        		}
        	});// eof Controller


/*

			// JQuery
			if(typeof this.jQuery === 'undefined'){
				this.require(['jquery'], function (jQuery) {
                    console.log('CORE: mainBase: jQuery required');
                    console.log(jQuery);
                    this.jQuery = jQuery;
                    this.$ = jQuery;
				}, this);
			}
			else {
				this.jQuery = this.jQuery;
				this.$ = this.jQuery;
			}
			// Lib
			if(typeof this.lib === 'undefined'){
				this.require(['../app/lib'], function (lib) {
                    console.log('CORE: mainBase: lib required');
                    console.log(lib);
                    this.lib = lib;
				}, this);
			}
			else {
				this.lib = this.lib;
			}
			// Controller
			if(typeof this.controller === 'undefined'){
				this.require(['../app/controller/controller'], function (controller) {
                    console.log('CORE: mainBase: controller required');
                    console.log(controller);
                    this.controller = controller;
				    // Set appName
				    console.log('CORE: mainBase ready this.controller.setAppName(this.appName):');
					// AppName
					if(typeof this.appName === 'undefined'){
						this.appName = 'unknown'; // default
						console.log(this.appName);
						this.controller.setAppName(this.appName);
					}
					else {
						this.appName = this.appName;
						console.log(this.appName);
						this.controller.setAppName(this.appName);
					}
				    // Set config, after Set appName
				    console.log('CORE: mainBase ready this.controller.setConfig(this.config):');
					// Config
					if(typeof this.config === 'undefined'){
						this.require(['../app/config/config'], function (config) {
		                    console.log('CORE: mainBase: config required');
		                    console.log(config);
		                    this.config = config;
				    		this.controller.setConfig(this.config);			                    
						}, this);
					}
					else {
						this.config = this.config;
				    	console.log(this.config);							
				    	this.controller.setConfig(this.config);							
					}
				    // Set serviceBus
				    console.log('CORE: mainBase ready this.controller.setServiceBus(this.serviceBus):');
					// ServiceBus
					if(typeof this.serviceBus === 'undefined'){
						this.require(['../app/serviceBus/serviceBus'], function (serviceBus) {
		                    console.log('CORE: mainBase: serviceBus required');
		                    console.log(serviceBus);
		                    this.serviceBus = serviceBus;
		                    this.controller.setServiceBus(this.serviceBus);
						}, this);
					}
					else {
						this.serviceBus = this.serviceBus;
						console.log(this.serviceBus); 
						this.controller.setServiceBus(this.serviceBus);
					}



				    // Set modelController, before modelService
				    console.log('CORE: mainBase ready this.controller.setModelController(this.modelController):');
					// ModelController
					if(typeof this.modelController === 'undefined'){
						this.require(['../app/modelController/modelController'], function (modelController) {
		                    console.log('CORE: mainBase: modelController required');
		                    console.log(modelController);
		                    this.modelController = modelController;
		                    this.controller.setModelController(this.modelController);
						}, this);
					}
					else {
						this.modelController = this.modelController;
						console.log(this.modelController);
						this.controller.setModelController(this.modelController);
					}
				    // Set modelService, before model
				    console.log('CORE: mainBase ready this.controller.setModelService(this.modelService):');
					// ModelService
					if(typeof this.modelService === 'undefined'){
						this.require(['../app/modelService/modelService'], function (modelService) {
		                    console.log('CORE: mainBase: modelService required');
		                    console.log(modelService);
		                    this.modelService = modelService;
		                    this.controller.setModelService(this.modelService);
						}, this);
					}
					else {
						this.modelService = this.modelService;
						console.log(this.modelService); 
						this.controller.setModelService(this.modelService);
					}
				    // Set model, after modelService
				    console.log('CORE: mainBase ready this.controller.setModel(this.model):');
					// Model
					if(typeof this.model === 'undefined'){
						this.require(['../app/model/model'], function (model) {
		                    console.log('CORE: mainBase: model required');
		                    console.log(model);
		                    this.model = model;
		                    this.controller.setModel(this.model);
						}, this);
					}
					else {
						this.model = this.model;
				    	console.log(this.model);						
						this.controller.setModel(this.model);
					}
				    // Set modelEvent, after model
				    console.log('CORE: mainBase ready this.controller.setModelEvent(this.modelEvent):');
					// ModelEvent
					if(typeof this.modelEvent === 'undefined'){
						this.require(['../app/modelEvent/modelEvent'], function (modelEvent) {
		                    console.log('CORE: mainBase: modelEvent required');
		                    console.log(modelEvent);
		                    this.modelEvent = modelEvent;
		                    this.controller.setModelEvent(this.modelEvent);
						}, this);
					}
					else {
						this.modelEvent = this.modelEvent;
						console.log(this.modelEvent);
						this.controller.setModelEvent(this.modelEvent);
					}
				    // Set viewController, before viewService
				    console.log('CORE: mainBase ready this.controller.setViewController(this.viewController):');
					// ViewController
					if(typeof this.viewController === 'undefined'){
						this.require(['../app/viewController/viewController'], function (viewController) {
		                    console.log('CORE: mainBase: viewController required');
		                    console.log(viewController);
		                    this.viewController = viewController;
		                    this.controller.setViewController(this.viewController);
						}, this);
					}
					else {
						this.viewController = this.viewController;
						console.log(this.viewController);
						this.controller.setViewController(this.viewController);
					}
				    // Set viewService, before view
				    console.log('CORE: mainBase ready this.controller.setViewService(this.viewService):');
					// ViewService
					if(typeof this.viewService === 'undefined'){
						this.require(['../app/viewService/viewService'], function (viewService) {
		                    console.log('CORE: mainBase: viewService required');
		                    console.log(viewService);
		                    this.viewService = viewService;
		                    this.controller.setViewService(this.viewService); 
						}, this);
					}
					else {
						this.viewService = this.viewService;
						console.log(this.viewService); 
						this.controller.setViewService(this.viewService); 
					}
				    // Set view, after viewService
				    console.log('CORE: mainBase ready this.controller.setView(this.view):');
					// View
					if(typeof this.view === 'undefined'){
						this.require(['../app/view/view'], function (view) {
		                    console.log('CORE: mainBase: view required');
		                    console.log(view);
		                    this.view = view;
		                    this.controller.setView(this.view);
						}, this);
					}
					else {
						this.view = this.view;
						console.log(this.view); 
						this.controller.setView(this.view);
					}
				    // Set viewEvent, after view
				    console.log('CORE: mainBase ready this.controller.viewEvent(this.viewEvent):');
					// ViewEvent
					if(typeof this.viewEvent === 'undefined'){
						this.require(['../app/viewEvent/viewEvent'], function (viewEvent) {
		                    console.log('CORE: mainBase: viewEvent required');
		                    console.log(viewEvent);
		                    this.viewEvent = viewEvent;
		                    this.controller.setViewEvent(this.viewEvent);
						}, this);
					}
					else {
						this.viewEvent = this.viewEvent;
						console.log(this.viewEvent);
						this.controller.setViewEvent(this.viewEvent);
					}
				    // Subscribe modelService, after Set modelService
				    console.log('CORE: mainBase ready this.controller.subscribeModelService()');			    
				    this.controller.subscribeModelService();
				    // Subscribe viewService, after Set viewService			    
				    console.log('CORE: mainBase ready this.controller.subscribeViewService()');				    
				    this.controller.subscribeViewService();
				    // LoadView, before renderView
				    console.log('CORE: mainBase ready this.controller.loadView(viewIndex):')
					console.log(this.viewIndex);
					this.controller.loadView(this.viewIndex);
					// RenderView, after loadView
			        console.log('CORE: mainBase ready this.controller.renderView(elementId):');	
					// ElementId
					if(typeof this.elementId === 'undefined'){
						this.elementId = 'unknown'; // default
						console.log(this.elementId);			
						this.controller.renderView(this.elementId);
					}
					else {
						this.elementId = this.elementId;
						console.log(this.elementId);
						this.controller.renderView(this.elementId);
					}			    				    				    			    
				}, this);
			}
			else {
				this.controller = this.controller;
			    // Set appName
			    console.log('CORE: mainBase ready this.controller.setAppName(this.appName):');
				// AppName
				if(typeof this.appName === 'undefined'){
					this.appName = 'unknown'; // default
			    	console.log(this.appName);						
					this.controller.setAppName(this.appName);
				}
				else {
					this.appName = this.appName;
			    	console.log(this.appName);						
					this.controller.setAppName(this.appName);
				}
			    // Set config, after Set appName
			    console.log('CORE: mainBase ready this.controller.setConfig(this.config):');
				// Config
				if(typeof this.config === 'undefined'){
					this.require(['../app/config/config'], function (config) {
	                    console.log('CORE: mainBase: config required');
	                    console.log(config);
	                    this.config = config;
			    		this.controller.setConfig(this.config);			                    
					}, this);
				}
				else {
					this.config = this.config;
					console.log(this.config);			
			    	this.controller.setConfig(this.config);							
				}
				// Set serviceBus
			    console.log('CORE: mainBase ready this.controller.setServiceBus(this.serviceBus):');
				// ServiceBus
				if(typeof this.serviceBus === 'undefined'){
					this.require(['../app/serviceBus/serviceBus'], function (serviceBus) {
	                    console.log('CORE: mainBase: serviceBus required');
	                    console.log(serviceBus);
	                    this.serviceBus = serviceBus;
	                    this.controller.setServiceBus(this.serviceBus);
					}, this);
				}
				else {
					this.serviceBus = this.serviceBus;
					console.log(this.serviceBus); 
					this.controller.setServiceBus(this.serviceBus);
				}
				// Set modelController, before modelService
			    console.log('CORE: mainBase ready this.controller.setModelController(this.modelController):');
				// ModelController
				if(typeof this.modelController === 'undefined'){
					this.require(['../app/modelController/modelController'], function (modelController) {
	                    console.log('CORE: mainBase: modelController required');
	                    console.log(modelController);
	                    this.modelController = modelController;
	                    this.controller.setModelController(this.modelController);
					}, this);
				}
				else {
					this.modelController = this.modelController;
					console.log(this.modelController);
					this.controller.setModelController(this.modelController);
				}
			    // Set modelService, before model
			    console.log('CORE: mainBase ready this.controller.setModelService(this.modelService):');
				// ModelService
				if(typeof this.modelService === 'undefined'){
					this.require(['../app/modelService/modelService'], function (modelService) {
	                    console.log('CORE: mainBase: modelService required');
	                    console.log(modelService);
	                    this.modelService = modelService;
	                    this.controller.setModelService(this.modelService);
					}, this);
				}
				else {
					this.modelService = this.modelService;
					console.log(this.modelService); 
					this.controller.setModelService(this.modelService);
				}
			    // Set model, after modelService
			    console.log('CORE: mainBase ready this.controller.setModel(this.model):');
			    console.log(this.model);
				// Model
				if(typeof this.model === 'undefined'){
					this.require(['../app/model/model'], function (model) {
	                    console.log('CORE: mainBase: model required');
	                    console.log(model);
	                    this.model = model;
	                    this.controller.setModel(this.model);
					}, this);
				}
				else {
					this.model = this.model;
					console.log(model);
					this.controller.setModel(this.model);
				}
			    // Set modelEvent, after model
			    console.log('CORE: mainBase ready this.controller.setModelEvent(this.modelEvent):');
				// ModelEvent
				if(typeof this.modelEvent === 'undefined'){
					this.require(['../app/modelEvent/modelEvent'], function (modelEvent) {
	                    console.log('CORE: mainBase: modelEvent required');
	                    console.log(modelEvent);
	                    this.modelEvent = modelEvent;
	                    this.controller.setModelEvent(this.modelEvent);
					}, this);
				}
				else {
					this.modelEvent = this.modelEvent;
					console.log(this.modelEvent);
					this.controller.setModelEvent(this.modelEvent);
				}
			    // Set viewController, before viewService
			    console.log('CORE: mainBase ready this.controller.setViewController(this.viewController):');
				// ViewController
				if(typeof this.viewController === 'undefined'){
					this.require(['../app/viewController/viewController'], function (viewController) {
	                    console.log('CORE: mainBase: viewController required');
	                    console.log(viewController);
	                    this.viewController = viewController;
	                    this.controller.setViewController(this.viewController);
					}, this);
				}
				else {
					this.viewController = this.viewController;
					console.log(this.viewController);
					this.controller.setViewController(this.viewController);
				}
			    // Set viewService, before view
			    console.log('CORE: mainBase ready this.controller.setViewService(this.viewService):');
				// ViewService
				if(typeof this.viewService === 'undefined'){
					this.require(['../app/viewService/viewService'], function (viewService) {
	                    console.log('CORE: mainBase: viewService required');
	                    console.log(viewService);
	                    this.viewService = viewService;
	                    this.controller.setViewService(this.viewService); 
					}, this);
				}
				else {
					this.viewService = this.viewService;
					console.log(this.viewService); 
					this.controller.setViewService(this.viewService); 
				} 
			    // Set view, after viewService
			    console.log('CORE: mainBase ready this.controller.setView(this.view):');
				// View
				if(typeof this.view === 'undefined'){
					this.require(['../app/view/view'], function (view) {
	                    console.log('CORE: mainBase: view required');
	                    console.log(view);
	                    this.view = view;
	                    this.controller.setView(this.view);
					}, this);
				}
				else {
					this.view = this.view;
					console.log(this.view); 
					this.controller.setView(this.view);
				}
			    // Set viewEvent, after view
			    console.log('CORE: mainBase ready this.controller.viewEvent(this.viewEvent):');
				// ViewEvent
				if(typeof this.viewEvent === 'undefined'){
					this.require(['../app/viewEvent/viewEvent'], function (viewEvent) {
	                    console.log('CORE: mainBase: viewEvent required');
	                    console.log(viewEvent);
	                    this.viewEvent = viewEvent;
	                    this.controller.setViewEvent(this.viewEvent);
					}, this);
				}
				else {
					this.viewEvent = this.viewEvent;
					console.log(this.viewEvent);
					this.controller.setViewEvent(this.viewEvent);
				}
			    // Subscribe modelService, after Set modelService
			    console.log('CORE: mainBase ready this.controller.subscribeModelService()');			    
			    this.controller.subscribeModelService();
			    // Subscribe viewService, after Set viewService			    
			    console.log('CORE: mainBase ready this.controller.subscribeViewService()');				    
			    this.controller.subscribeViewService();
			    // LoadView, before renderView
			    console.log('CORE: mainBase ready this.controller.loadView(viewIndex):')
				console.log(this.viewIndex);
				this.controller.loadView(this.viewIndex);
				// RenderView, after loadView
		        console.log('CORE: mainBase ready this.controller.renderView(elementId):');        
				// ElementId
				if(typeof this.elementId === 'undefined'){
					this.elementId = 'unknown'; // default
					console.log(this.elementId);				
					this.controller.renderView(this.elementId);
				}
				else {
					this.elementId = this.elementId;
					console.log(this.elementId);			
					this.controller.renderView(this.elementId);
				}
			}
			// Backbone
			if(typeof this.backbone === 'undefined'){
				this.require(['backbone'], function (backbone) {
                    console.log('CORE: mainBase: backbone required');
                    console.log(backbone);
                    this.backbone = backbone;
				}, this);
			}
			else {
				this.backbone = this.backbone;
			}
			// Underscore
			if(typeof this.underscore === 'undefined'){
				this.require(['underscore'], function (underscore) {
                    console.log('CORE: mainBase: underscore required');
                    console.log(underscore);
                    this.underscore = underscore;
				}, this);
			}
			else {
				this.underscore = this.underscore;
			}
			// Lodash
			if(typeof this.lodash === 'undefined'){
				this.require(['lodash'], function (lodash) {
                    console.log('CORE: mainBase: lodash required');
                    console.log(lodash);
                    this.lodash = lodash;
				}, this);
			}
			else {
				this.lodash = this.lodash;
			}
			// Bootstrap
			if(typeof this.bootstrap === 'undefined'){
				this.require(['bootstrap'], function (bootstrap) {
                    console.log('CORE: mainBase: bootstrap required');
                    console.log(bootstrap);
                    this.bootstrap = bootstrap;
				}, this);
			}
			else {
				this.bootstrap = this.bootstrap;
			}
			// Expect
			if(typeof this.expect === 'undefined'){
				this.require(['expect'], function (expect) {
                    console.log('CORE: mainBase: expect required');
                    console.log(expect);
                    this.expect = expect;
				}, this);
			}
			else {
				this.expect = this.expect;
			}
			// Mocha
			if(typeof this.mocha === 'undefined'){
				this.require(['mocha'], function (mocha) {
                    console.log('CORE: mainBase: mocha required');
                    console.log(mocha);
                    this.mocha = mocha;
				}, this);
			}
			else {
				this.mocha = this.mocha;
			}
			// JQueryPP
			if(typeof this.jQueryPP === 'undefined'){
				this.require(['jquerypp.custom'], function (jQueryPP) {
                    console.log('CORE: mainBase: jQueryPP required');
                    console.log(jQueryPP);
                    this.jQueryPP = jQueryPP;
				}, this);
			}
			else {
				this.jQueryPP = this.jQueryPP;
			}
			// FrameWarp
			if(typeof this.frameWarp === 'undefined'){
				this.require(['framewarp'], function (frameWarp) {
                    console.log('CORE: mainBase: frameWarp required');
                    console.log(frameWarp);
                    this.frameWarp = frameWarp;
				}, this);
			}
			else {
				this.frameWarp = this.frameWarp;
			} 
*/

        }
    };
    return mainBase;
});
