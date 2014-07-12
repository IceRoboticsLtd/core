/*
 * ViewControllerBase
 */
define(function () {
	console.log('CORE: viewControllerBase called');
    function viewControllerBase(id) {
        this.id = id;
    };
    viewControllerBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: viewControllerBase setServiceBus(serviceBus) called');			
			this.serviceBus = serviceBus;
		},
		setView: function (view) {
			console.log('CORE: viewControllerBase setView(view) called');		
			this.view = view;
		},	
		setViewService: function (viewService) {
			console.log('CORE: viewControllerBase setViewService(viewService) called');			
			this.viewService = viewService;
			this.viewService.setServiceBus(this.serviceBus);
		},
		setViewEvent: function (viewEvent) {
			console.log('CORE: viewControllerBase setViewEvent(viewEvent) called');		
			this.viewEvent = viewEvent;
		},
		setConfig: function(config) {
			console.log('CORE: viewControllerBase setConfig(config) called');		
			this.config = config;
		},		
    	loadView: function (id) {
			console.log('CORE: viewControllerBase loadView(id) called'); 		
	        // Get the viewService.
	        var viewService = this.viewService.find(id);
	        // Get a new view
	        var view = new this.view(viewService);
	        // run the view's render function
	        view.render();
	    },
	    subscribeViewService: function(id) {
			console.log('CORE: viewControllerBase subscribeViewService(id) called'); 	    	
	        // Get the viewService.
	        var viewService = this.viewService.find(id);
	    	// run the viewService's subscribe function, using config
	    	var config = { channel: 'calculator', viewTopics: ['calculated']}; // to do: get these from this.config
	    	viewService.subscribe(config);
	    },
        renderView: function (bodyDom) {
			console.log('CORE: viewControllerBase renderView(bodyDom) called');       	
            bodyDom.prepend('<h2>ViewController ' + this.id + ' says "' +
                      this.viewService.getTitle() + '"</h2>');
        }
    };
    return viewControllerBase;
});