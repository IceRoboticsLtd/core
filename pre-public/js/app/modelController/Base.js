/*
 * ModelControllerBase
 */
define(function () {
    console.log('CORE: modelControllerBase called');
    function modelControllerBase(id) {
        this.id = id;
    };
    modelControllerBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: modelControllerBase setServiceBus(serviceBus) called');		
			this.serviceBus = serviceBus;
		},
		setApp: function (app) {
			console.log('CORE: modelControllerBase setApp(app) called');
			this.app = app;
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
				if(key == this.app) {
					console.log('CORE: modelControllerBase app ' + this.app + ' found in app_list');
					app_not_found = false;

					var app_configs = app_list[key];

					console.log('CORE: modelControllerBase app_configs')
					console.log(app_configs);

					// continue for models ....
					if(typeof app_configs.models === 'undefined') {
						console.log('CORE: modelControllerBase no models found for app ' + this.app);
						var models = {};
					}
					else {
						console.log('CORE: modelControllerBase models found for app ' + this.app);
						console.log(app_configs.models);
						var models = app_configs.models;
					}



				}
			}// eof for
			if(app_not_found) {
				console.log('CORE: modelControllerBase app ' + this.app + 'not found in app_list');
			}
		},	
		setModelService: function (modelService) {
			console.log('CORE: modelControllerBase setModelService(modelService) called');			
			this.modelService = modelService;
			this.modelService.setServiceBus(this.serviceBus);
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
	        // Get the modelService.
	        var modelService = this.modelService.find(id);
	        // Get a new model
	        var model = new this.model(modelService);
	        // run the model's render function
	        model.render();
	    },
	    subscribeModelService: function(id) {
			console.log('CORE: modelControllerBase subscribeModelService(id) called'); 	    	
	        // Get the modelService.
	        var modelService = this.modelService.find(id);    	
	    	// run the modelService's subscribe function, using config
	    	var config = { channel: 'calculator', modelTopics: ['calculate']}; // to do: get these from this.config
	    	modelService.subscribe(config);
	    },	    
        renderView: function (bodyDom) {
			console.log('CORE: modelControllerBase renderView(bodyDom) called');    	
            bodyDom.prepend('<h2>ModelController ' + this.id + ' says "' +
                      this.model.getTitle() + '"</h2>');
        }
    };
    return modelControllerBase;
});