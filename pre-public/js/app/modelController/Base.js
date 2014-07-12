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
		setModel: function (model) {
			console.log('CORE: modelControllerBase setModel(model) called');			
			this.model = model;
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