/*
 * ControllerBase
 */
define(function () {
    console.log('CORE: controllerBase called');
    function controllerBase(id) {
        this.id = id;
    };
    controllerBase.prototype = {
		setModelController: function (modelController) {
			console.log('CORE: controllerBase setModelController(modelController) called');
			this.modelController = modelController;
		},
		setModelEvent: function (modelEvent) {
			console.log('CORE: controllerBase setModelEvent(modelEvent) called');
			this.modelEvent = modelEvent;
			this.modelController.setModelEvent(modelEvent);
		},
		setModelService: function (modelService) {
			console.log('CORE: controllerBase setModelService(modelService) called');			
			this.modelService = modelService;
			this.modelController.setModelService(modelService);			
		},
        setModel: function (model) {
        	console.log('CORE: controllerBase setModel(model) called');
            this.model = model;
            this.modelController.setModel(model);	
        },
		loadModel: function (id) {
			console.log('CORE: controllerBase loadModel(id) called');			
			this.modelController.loadModel(id);
		},
		setViewController: function (viewController) {
			console.log('CORE: controllerBase setViewController(viewController) called');	
			this.viewController = viewController;
		},        
        setConfig: function (config) {
        	console.log('CORE: controllerBase setConfig(config) called');
            this.config = config;
            this.modelController.setConfig(config);
            this.viewController.setConfig(config);
        },	
		setServiceBus: function (serviceBus) {
			console.log('CORE: controllerBase setServiceBus(serviceBus) called');
			this.serviceBus = serviceBus;
            this.modelController.setServiceBus(serviceBus);
            this.viewController.setServiceBus(serviceBus);			
		},
		setViewEvent: function (viewEvent) {
			console.log('CORE: controllerBase setViewEvent(viewEvent) called');
			this.viewEvent = viewEvent;
			this.viewController.setViewEvent(viewEvent);
		},		
		setViewService: function (viewService) {
			console.log('CORE: controllerBase setViewService(viewService) called');			
			this.viewService = viewService;
			this.viewController.setViewService(viewService);		
		},
		setView: function (view) {
			console.log('CORE: controllerBase setView(view) called');			
			this.view = view;
			this.viewController.setView(view);
		},
		loadView: function (id) {
			console.log('CORE: controllerBase loadView(id) called');			
			this.viewController.loadView(id);
		},
        renderView: function (bodyDom) {
        	console.log('CORE: controllerBase renderView(bodyDom) called');     	
			this.viewController.renderView(bodyDom);
        //    bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
        //              this.model.getTitle() + '"</h2>');
        }
    };
    return controllerBase;
});
