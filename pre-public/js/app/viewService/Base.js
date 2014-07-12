/*
 * ViewServiceBase
 */
define(function () {
	console.log('CORE: viewServiceBase called');
    function viewServiceBase(id) {
        this.id = id;
        this.title = 'viewService default title';
        this.myProperty = {};        
    };
    viewServiceBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: viewServiceBase setServiceBus(serviceBus) called');		
			this.serviceBus = serviceBus;
            // The viewService instance has a property called "myProperty"
            // created from the serviceBus's "yourProperty".
            this.myProperty = this.serviceBus.yourProperty;            
		},     
        subscribe: function (config) {
            console.log('CORE: viewServiceBase subscribe(config) called'); 
            this.config = config;
            // Subscribe to the serviceBus with channels and topics from config
            // TO DO
        },
        getTitle: function () {
            console.log('CORE: viewServiceBase getTitle() called');            
            return this.title;
        },
        setTitle: function (title) {
            console.log('CORE: viewServiceBase setTitle(title) called');            
            this.title = title;
        }
    };
    return viewServiceBase;
});
