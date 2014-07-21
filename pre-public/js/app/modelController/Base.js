/*
 * ModelControllerBase
 */
define(function () {
    console.log('CORE: modelControllerBase called');
    function modelControllerBase(id) {
        this.id = id;
        this.modelArray = {};
    };
    function cloneObject(oldObject) {
    	function F() {}
    	F.prototype = oldObject;
    	return new F();
    };
    modelControllerBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: modelControllerBase setServiceBus(serviceBus) called');		
			this.serviceBus = serviceBus;
		},
		setAppName: function (appName) {
			console.log('CORE: modelControllerBase setAppName(appName) called');
			this.appName = appName;
		},
		setModel: function (model) {
			console.log('CORE: modelControllerBase setModel(model) called');			
			this.model = model;
			// model is a template, ready to be made specific based on the models in the config
			var app_not_found = true; // default to true
			// lookup app in app_list
			var configs = this.config.getConfigs();
			var app_list = configs.app_list;
			for (key in app_list) {
				if(key == this.appName) {
					console.log('CORE: modelControllerBase appName ' + this.appName + ' found in app_list');
					app_not_found = false;
					var app_configs = app_list[key];
					console.log('CORE: modelControllerBase app_configs')
					console.log(app_configs);
					// continue for models ....
					if(typeof app_configs.models === 'undefined') {
						console.log('CORE: modelControllerBase no models found for appName ' + this.appName);
						var models = {};
					}
					else {
						console.log('CORE: modelControllerBase models found for appName ' + this.appName);
						console.log(app_configs.models);
						var models = app_configs.models;
					}
					var i = 0;
					for (key in models) {
						console.log('CORE: modelControllerBase model ' + key + ' found in models');
						var model_keyValuePairs = models[key];
						console.log('CORE: modelControllerBase model ' + key + ' key value pairs:');
						console.log(model_keyValuePairs);
						// modelService is a template, ready to be made specific based on the new model's keyValuePairs
						// Create a new modelService
						var newModelService = cloneObject(this.modelService);
						newModelService.setServiceBus(this.serviceBus);
						// Set subscriptions to newModelService
						for(key in model_keyValuePairs) {
							if(key == 'subscriptions') {
								var subscriptions = model_keyValuePairs[key];
								console.log('CORE: modelControllerBase subscriptions in key value pairs:');
								console.log(subscriptions);
								newModelService.setSubscriptions(subscriptions);
							}
						}
						// Create a new model for these keyValuePairs
						var newModel = cloneObject(this.model);
						newModel.setKeyValuePairs(model_keyValuePairs);
						// Set new model service on the new model
						newModel.setModelService(newModelService);
						// Add new model to model array
						this.modelArray[i] = newModel;
						console.log('CORE: modelControllerBase modelArray [' + i + ']');
						console.log(this.modelArray[i]);
						// Increase i by 1
						i++;
					}
					console.log('CORE: modelControllerBase modelArray');
					console.log(this.modelArray);			
				}
			}// eof for
			if(app_not_found) {
				console.log('CORE: modelControllerBase appName ' + this.appName + 'not found in app_list');
			}
		},	
		setModelService: function (modelService) {
			console.log('CORE: modelControllerBase setModelService(modelService) called');			
			this.modelService = modelService;
		},
		setModelEvent: function (modelEvent) {
			console.log('CORE: modelControllerBase setModelEvent(modelEvent) called');		
			this.modelEvent = modelEvent;
		},
		setConfig: function(config) {
			console.log('CORE: modelControllerBase setConfig(config) called');	
			this.config = config;
		},
    	loadModel: function (id) {
			console.log('CORE: modelControllerBase loadModel(id) called');    		
	        // Get the model from the model array.
	    // OLD    var modelService = this.modelService.find(id);
	    // OLD Get a new model
	    // OLD    var model = new this.model(modelService);
	        // run the model's render function
	    // OLD    model.render();
	    },
	    subscribeModelService: function() {
			console.log('CORE: modelControllerBase subscribeModelService() called'); 	    	
	        // Get the modelService from the model in the modelArray
	        for (key in this.modelArray) {
	        	console.log('CORE: modelControllerBase model ' + key + ' in modelArray');
	        	var model = this.modelArray[key];
	        	console.log(model);
	        	for (key in model) {
	        		if (key == 'modelService') {
	        			var modelService = model[key];
	        			modelService.subscribe();
	        		}
	        	}
	        }
	    },	    
        renderView: function (bodyDom) {
			console.log('CORE: modelControllerBase renderView(bodyDom) called');    	
        // OLD    bodyDom.prepend('<h2>ModelController ' + this.id + ' says "' +
        // OLD              this.model.getTitle() + '"</h2>');
        }
    };
    return modelControllerBase;
});