/*
 * ModelServiceBase
 */
define(function () {
    console.log('CORE: modelServiceBase called');
    function modelServiceBase(id) {
        this.id = id;
    };
    modelServiceBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: modelServiceBase setServiceBus(serviceBus) called');		
			this.serviceBus = serviceBus;
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
