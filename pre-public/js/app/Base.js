/*
 * MainBase
 */
define(function () {
    console.log('CORE: mainBase called');
    function mainBase(id, require) {
        this.id = id;
	    var $ = require('jquery'),
	        backbone = require('backbone'),
	        underscore = require('underscore'),
	        lodash = require('lodash'),
	        jquery = require('jquery'),
	        bootstrap = require('bootstrap'), // bootstrap extends jquery
	        expect = require('expect'),
	        mocha = require('mocha'),
	        jquerypp = require('jquerypp.custom'),
	        framewarp = require('framewarp');
    };
    mainBase.prototype = {
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
        readyModelController: function(me, callback) {
        	console.log('CORE: mainBase readyModelController(me, callback) called');
        	var err = null;
			if(typeof this.modelController === 'undefined') {
				this.require(['../app/modelController/modelController'], function (modelController) {
                    console.log('CORE: mainBase: modelController required');
                    console.log(modelController);
                    this.modelController = modelController; 
                    callback(me, err, this.modelController);
            	});
            }
			else {
				this.modelController = this.modelController;
				console.log(this.modelController);
        		callback(me, err, this.modelController);
        	}
    	},
        readyModelService: function(me, callback) {
        	console.log('CORE: mainBase readyModelService(me, callback) called');
        	var err = null;
			if(typeof this.modelService === 'undefined') {
				this.require(['../app/modelService/modelService'], function (modelService) {
                    console.log('CORE: mainBase: modelService required');
                    console.log(modelService);
                    this.modelService = modelService; 
                    callback(me, err, this.modelService);
            	});
            }
			else {
				this.modelService = this.modelService;
				console.log(this.modelService);
        		callback(me, err, this.modelService);
        	}
    	},
        readyModel: function(me, callback) {
        	console.log('CORE: mainBase readyModel(me, callback) called');
        	var err = null;
			if(typeof this.model === 'undefined') {
				this.require(['../app/model/model'], function (model) {
                    console.log('CORE: mainBase: model required');
                    console.log(model);
                    this.model = model; 
                    callback(me, err, this.model);
            	});
            }
			else {
				this.model = this.model;
				console.log(this.model);
        		callback(me, err, this.model);
        	}
    	},
        readyModelEvent: function(me, callback) {
        	console.log('CORE: mainBase readyModelEvent(me, callback) called');
        	var err = null;
			if(typeof this.modelEvent === 'undefined') {
				this.require(['../app/modelEvent/modelEvent'], function (modelEvent) {
                    console.log('CORE: mainBase: modelEvent required');
                    console.log(modelEvent);
                    this.modelEvent = modelEvent; 
                    callback(me, err, this.modelEvent);
            	});
            }
			else {
				this.modelEvent = this.modelEvent;
				console.log(this.modelEvent);
        		callback(me, err, this.modelEvent);
        	}
    	},
        readyViewController: function(me, callback) {
        	console.log('CORE: mainBase readyViewController(me, callback) called');
        	var err = null;
			if(typeof this.viewController === 'undefined') {
				this.require(['../app/viewController/viewController'], function (viewController) {
                    console.log('CORE: mainBase: viewController required');
                    console.log(viewController);
                    this.viewController = viewController; 
                    callback(me, err, this.viewController);
            	});
            }
			else {
				this.viewController = this.viewController;
				console.log(this.viewController);
        		callback(me, err, this.viewController);
        	}
    	},
        readyViewService: function(me, callback) {
        	console.log('CORE: mainBase readyViewService(me, callback) called');
        	var err = null;
			if(typeof this.viewService === 'undefined') {
				this.require(['../app/viewService/viewService'], function (viewService) {
                    console.log('CORE: mainBase: viewService required');
                    console.log(viewService);
                    this.viewService = viewService; 
                    callback(me, err, this.viewService);
            	});
            }
			else {
				this.viewService = this.viewService;
				console.log(this.viewService);
        		callback(me, err, this.viewService);
        	}
    	},
        readyView: function(me, callback) {
        	console.log('CORE: mainBase readyView(me, callback) called');
        	var err = null;
			if(typeof this.view === 'undefined') {
				this.require(['../app/view/view'], function (view) {
                    console.log('CORE: mainBase: view required');
                    console.log(view);
                    this.view = view; 
                    callback(me, err, this.view);
            	});
            }
			else {
				this.view = this.view;
				console.log(this.view);
        		callback(me, err, this.view);
        	}
    	},
        readyViewEvent: function(me, callback) {
        	console.log('CORE: mainBase readyViewEvent(me, callback) called');
        	var err = null;
			if(typeof this.viewEvent === 'undefined') {
				this.require(['../app/viewEvent/viewEvent'], function (viewEvent) {
                    console.log('CORE: mainBase: viewEvent required');
                    console.log(viewEvent);
                    this.viewEvent = viewEvent; 
                    callback(me, err, this.viewEvent);
            	});
            }
			else {
				this.viewEvent = this.viewEvent;
				console.log(this.viewEvent);
        		callback(me, err, this.viewEvent);
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
									// ModelController
									me.readyModelController(me, function(me, err, modelController) {
										if(err) {
											console.log('CORE: mainBase readyModelController error:');
											console.log(err);
										}
										else {
											console.log('CORE: mainBase ready modelController:');
											console.log(modelController);
											me.modelController = modelController;
											// Set modelController
											console.log('CORE: mainBase ready me.controller.setModelController(me.modelController):');
											// ModelController
											if(typeof me.modelController === 'undefined') {
												me.modelController = {}; // default
												console.log(me.modelController);
												me.controller.setModelController(me.modelController);
											}
											else {
												me.modelController = me.modelController;
												console.log(me.modelController);
												me.controller.setModelController(me.modelController);
											}
											// ModelService
											me.readyModelService(me, function(me, err, modelService) {
												if(err) {
													console.log('CORE: mainBase readyModelService error:');
													console.log(err);
												}
												else {
													console.log('CORE: mainBase ready modelService:');
													console.log(modelService);
													me.modelService = modelService;
													// Set modelService
													console.log('CORE: mainBase ready me.controller.setModelService(me.modelService):');
													// ModelService
													if(typeof me.modelService === 'undefined') {
														me.modelService = {}; // default
														console.log(me.modelService);
														me.controller.setModelService(me.modelService);
													}
													else {
														me.modelService = me.modelService;
														console.log(me.modelService);
														me.controller.setModelService(me.modelService);
													}
													// Model
													me.readyModel(me, function(me, err, model) {
														if(err) {
															console.log('CORE: mainBase readyModel error:');
															console.log(err);
														}
														else {
															console.log('CORE: mainBase ready model:');
															console.log(model);
															me.model = model;
															// Set model
															console.log('CORE: mainBase ready me.controller.setModel(me.model):');
															// Model
															if(typeof me.model === 'undefined') {
																me.model = {}; // default
																console.log(me.model);
																me.controller.setModel(me.model);
															}
															else {
																me.model = me.model;
																console.log(me.model);
																me.controller.setModel(me.model);
															}
															// ModelEvent
															me.readyModelEvent(me, function(me, err, modelEvent) {
																if(err) {
																	console.log('CORE: mainBase readyModelEvent error:');
																	console.log(err);
																}
																else {
																	console.log('CORE: mainBase ready modelEvent:');
																	console.log(modelEvent);
																	me.modelEvent = modelEvent;
																	// Set modelEvent
																	console.log('CORE: mainBase ready me.controller.setModelEvent(me.modelEvent):');
																	// ModelEvent
																	if(typeof me.modelEvent === 'undefined') {
																		me.modelEvent = {}; // default
																		console.log(me.modelEvent);
																		me.controller.setModelEvent(me.modelEvent);
																	}
																	else {
																		me.modelEvent = me.modelEvent;
																		console.log(me.modelEvent);
																		me.controller.setModelEvent(me.modelEvent);
																	}
																	// Subscribe ModelService
																	console.log('CORE: mainBase ready this.controller.subscribeModelService()');			    
				    												me.controller.subscribeModelService();
				    												// More ...


																}
															});// eof ModelEvent
														}
													});// eof Model
												}
											});// eof ModelService
										}
									});// eof ModelController
									// ViewController
									me.readyViewController(me, function(me, err, viewController) {
										if(err) {
											console.log('CORE: mainBase readyViewController error:');
											console.log(err);
										}
										else {
											console.log('CORE: mainBase ready viewController:');
											console.log(viewController);
											me.viewController = viewController;
											// Set viewController
											console.log('CORE: mainBase ready me.controller.setViewController(me.viewController):');
											// ViewController
											if(typeof me.viewController === 'undefined') {
												me.viewController = {}; // default
												console.log(me.viewController);
												me.controller.setViewController(me.viewController);
											}
											else {
												me.viewController = me.viewController;
												console.log(me.viewController);
												me.controller.setViewController(me.viewController);
											}
											// ViewService
											me.readyViewService(me, function(me, err, viewService) {
												if(err) {
													console.log('CORE: mainBase readyViewService error:');
													console.log(err);
												}
												else {
													console.log('CORE: mainBase ready viewService:');
													console.log(viewService);
													me.viewService = viewService;
													// Set viewService
													console.log('CORE: mainBase ready me.controller.setViewService(me.viewService):');
													// ViewService
													if(typeof me.viewService === 'undefined') {
														me.viewService = {}; // default
														console.log(me.viewService);
														me.controller.setViewService(me.viewService);
													}
													else {
														me.viewService = me.viewService;
														console.log(me.viewService);
														me.controller.setViewService(me.viewService);
													}
													// View
													me.readyView(me, function(me, err, view) {
														if(err) {
															console.log('CORE: mainBase readyView error:');
															console.log(err);
														}
														else {
															console.log('CORE: mainBase ready view:');
															console.log(view);
															me.view = view;
															// Set view
															console.log('CORE: mainBase ready me.controller.setView(me.view):');
															// View
															if(typeof me.view === 'undefined') {
																me.view = {}; // default
																console.log(me.view);
																me.controller.setView(me.view);
															}
															else {
																me.view = me.view;
																console.log(me.view);
																me.controller.setView(me.view);
															}
															// ViewEvent
															me.readyViewEvent(me, function(me, err, viewEvent) {
																if(err) {
																	console.log('CORE: mainBase readyViewEvent error:');
																	console.log(err);
																}
																else {
																	console.log('CORE: mainBase ready viewEvent:');
																	console.log(viewEvent);
																	me.viewEvent = viewEvent;
																	// Set viewEvent
																	console.log('CORE: mainBase ready me.controller.setViewEvent(me.viewEvent):');
																	// ViewEvent
																	if(typeof me.viewEvent === 'undefined') {
																		me.viewEvent = {}; // default
																		console.log(me.viewEvent);
																		me.controller.setViewEvent(me.viewEvent);
																	}
																	else {
																		me.viewEvent = me.viewEvent;
																		console.log(me.viewEvent);
																		me.controller.setViewEvent(me.viewEvent);
																	}
																	// Subscribe ViewService
																	console.log('CORE: mainBase ready this.controller.subscribeViewService()');			    
				    												me.controller.subscribeViewService();
				    												// More ...



																}
															});// eof ViewEvent
														}
													});// eof View
												}
											});// eof ViewService
										}
									});// eof ViewController
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
