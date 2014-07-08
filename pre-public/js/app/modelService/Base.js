/*
 * ModelServiceBase
 */
define(function () {
    console.log('CORE: modelServiceBase called');
    function modelServiceBase(id) {
        this.id = id;
    	this.myProperty = {};
    };
    modelServiceBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: modelServiceBase setServiceBus(serviceBus) called');		
			this.serviceBus = serviceBus;
			// The modelService instance has a property called "myProperty"
    		// created from the serviceBus's "yourProperty".
			this.myProperty = this.serviceBus.yourProperty;
		},    	
		subscribe: function (config) {
			console.log('CORE: modelServiceBase subscribe(config) called');	
			this.config = config;
			// Subscribe to the serviceBus with channels and topics from config
			// TO DO
		}
    };   
    return modelServiceBase;
});
