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
		setSubscriptions: function (subscriptions){
			console.log('CORE: modelServiceBase setSubscriptions(subscriptions) called');
			this.subscriptions = subscriptions;
		},
		subscribe: function () {
			console.log('CORE: modelServiceBase subscribe() called');	
			// Subscribe to the serviceBus with channels and topics from subscriptions
			// TO DO
		}
    };   
    return modelServiceBase;
});
