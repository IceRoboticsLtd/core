/*
 * ModelControllerBase
 */
define(function () {
    console.log('CORE: modelControllerBase called');
    function modelControllerBase(id) {
        this.id = id;
        this.modelArray = {};
        // Adopted from BackBone
		// Map from CRUD to HTTP for our default `modelControllerBase.sync` implementation.
		this.methodMap = {
		    'create': 'POST',
		    'update': 'PUT',
		    'patch':  'PATCH',
		    'delete': 'DELETE',
		    'read':   'GET'
		};
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
	        try {
	        	this.loadedModel = this.modelArray[id];
				console.log('CORE: modelControllerBase loadedModel:');
	        	console.log(this.loadedModel);
	        }
	        catch(e) {
	        	console.log('CORE: modelControllerBase loadModel(id) error:');
	        	console.log(e);
	        }
	    },
	    subscribeModelService: function() {
			console.log('CORE: modelControllerBase subscribeModelService() called');
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
        renderModel: function () {
			console.log('CORE: modelControllerBase renderModel() called');    	
			this.loadedModel.renderModel(); // NOTE: Use the loaded Model !!
        },
        // Adopted from Backbone
        //
        // Backbone.sync
		// -------------
		// Override this function to change the manner in which Backbone persists
		// models to the server. You will be passed the type of request, and the
		// model in question. By default, makes a RESTful Ajax request
		// to the model's `url()`. Some possible customizations could be:
		//
		// * Use `setTimeout` to batch rapid-fire updates into a single request.
		// * Send up the models as XML instead of JSON.
		// * Persist models via WebSockets instead of Ajax.
		//
		// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
		// as `POST`, with a `_method` parameter containing the true HTTP method,
		// as well as all requests with the body as `application/x-www-form-urlencoded`
		// instead of `application/json` with the model in a param named `model`.
		// Useful when interfacing with server-side languages like **PHP** that make
		 // it difficult to read the body of `PUT` requests.
        sync: function(method, model, options) {
            console.log('CORE: modelControllerBase sync(method, model, options) called');
		    var type = modelControllerBase.methodMap[method];
		    // Default options, unless specified.
		    _.defaults(options || (options = {}), {
		      emulateHTTP: CORE.main.emulateHTTP,
		      emulateJSON: CORE.main.emulateJSON
		    });
		    // Default JSON-request options.
		    var params = {type: type, dataType: 'json'};
		    // Ensure that we have a URL.
		    if (!options.url) {
		      	params.url = _.result(model, 'url') || urlError();
		    }
		    // Ensure that we have the appropriate request data.
		    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
		      	params.contentType = 'application/json';
		      	params.data = JSON.stringify(options.attrs || model.toJSON(options));
		    }
		    // For older servers, emulate JSON by encoding the request into an HTML-form.
		    if (options.emulateJSON) {
		      	params.contentType = 'application/x-www-form-urlencoded';
		      	params.data = params.data ? {model: params.data} : {};
		    }
		    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
		    // And an `X-HTTP-Method-Override` header.
		    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
		      	params.type = 'POST';
		      	if (options.emulateJSON) params.data._method = type;
		      	var beforeSend = options.beforeSend;
		      	options.beforeSend = function(xhr) {
		        	xhr.setRequestHeader('X-HTTP-Method-Override', type);
		        	if (beforeSend) return beforeSend.apply(this, arguments);
		      	};
		    }
		    // Don't process data on a non-GET request.
		    if (params.type !== 'GET' && !options.emulateJSON) {
		      	params.processData = false;
		    }
		    // Pass along `textStatus` and `errorThrown` from jQuery.
		    var error = options.error;
		    options.error = function(xhr, textStatus, errorThrown) {
		      	options.textStatus = textStatus;
		      	options.errorThrown = errorThrown;
		      	if (error) error.apply(this, arguments);
		    };
		    // Make the request, allowing the user to override any Ajax options.
		    var xhr = options.xhr = modelControllerBase.ajax(_.extend(params, options));
		    model.trigger('request', model, xhr, options);
		    return xhr;
        }, // eof sync()
 		// Set the default implementation of `modelControllerBase.ajax` to proxy through to `$`.
  		// Override this if you'd like to use a different library.
  		ajax: function() {
    		return CORE.main.$.ajax.apply(CORE.main.$, arguments);
  		}
    };
    return modelControllerBase;
});