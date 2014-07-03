/*
 * ModelControllerBase
 */
define(function () {
    console.log('modelControllerBase called');
    function modelControllerBase(id) {
        this.id = id;
    };
    modelControllerBase.prototype = {
		setServiceBus: function (serviceBus) {
			this.serviceBus = serviceBus;
		},
		setModel: function (model) {
			this.model = model;
		},	
		setModelService: function (modelService) {
			this.modelService = modelService;
		},
		setModelEvent: function (modelEvent) {
			this.modelEvent = modelEvent;
		},
		setConfig: function(config) {
			this.config = config;
		},
    	loadModel: function (id) {
	        // Get the modelService.
	        var modelService = this.modelService.find(id);
	        // Get a new model
	        var model = new this.model(modelService);
	        // run the model's render function
	        model.render();
	    },
	    subscribeModelService: function(id) {
	        // Get the modelService.
	        var modelService = this.modelService.find(id);    	
	    	// run the modelService's subscribe function, using config
	    	var config = { channel: 'calculator', modelTopics: ['calculate']}; // to do: get these from this.config
	    	modelService.subscribe(config);
	    },	    
        render: function (bodyDom) {
            bodyDom.prepend('<h1>ModelController ' + this.id + ' says "' +
                      this.app.getTitle() + '"</h2>');
        }
    };
    return modelControllerBase;
});