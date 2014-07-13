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
		setSubscriptions: function (subscriptions) {
			console.log('CORE: modelServiceBase setSubscriptions(subscriptions) called');
			this.subscriptions = subscriptions;
		},
		subscribe: function () {
			console.log('CORE: modelServiceBase subscribe() called');	
			// Subscribe to the serviceBus with channels and topics from subscriptions
			this.subscriptions.forEach( function (subscription) {
                var topicArray = new Array();				
				for (key in subscription) {
                    // One subscription has one channel					
					if(key == 'channel') {
						var channel = subscription[key];
						console.log('CORE: modelServiceBase channel:');
						console.log(channel);
					}
                    // One channel has one or more topics
                    if(key == 'topic') {
                        var topic = subscription[key];
                        console.log('CORE: modelServiceBase topic:');
                        console.log(topic);
                        topicArray.push(topic);
                    }
				}
                console.log('CORE: modelServiceBase topicArray:');
                console.log(topicArray);
                // Now we should have one channel and one or more topics
                // TO DO: subscribe to the channel+topic for each topic				
			});
		}
    };   
    return modelServiceBase;
});
