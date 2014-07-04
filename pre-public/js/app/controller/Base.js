/*
 * ControllerBase
 */
define(function () {
    console.log('CORE: controllerBase called');
    function controllerBase(id) {
        this.id = id;
    };
    controllerBase.prototype = {
        setModel: function (model) {
        	console.log('CORE: controllerBase setModel called');
            this.model = model;
        },

        setConfig: function (config) {
            this.config = config;
        },

		setModelController: function (modelController) {
			this.modelController = modelController;
		},		

		setModelService: function (modelService) {
			this.modelService = modelService;
		},	
		
		setServiceBus: function (serviceBus) {
			this.serviceBus = serviceBus;
		},

		setView: function (view) {
			this.view = view;
		},
		
		setViewController: function (viewController) {
			this.viewController = viewController;
		},	

		setViewService: function (viewService) {
			this.viewService = viewService;
		},
		
        render: function (bodyDom) {
        	console.log('CORE: controllerBase render called');        	
            bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
                      this.model.getTitle() + '"</h2>');
        }
    };
    return controllerBase;
});
