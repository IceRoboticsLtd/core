/*
 * ServiceBus
 */
define(['./Base'], function (Base) {
    console.log('CORE: serviceBus called');
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    	var r = (d + Math.random()*16)%16 | 0;
    	d = Math.floor(d/16);
    	return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    var _ServiceBus = new Base(uuid);
    /*
     * Conduit
	 */
	function Conduit(options) { 
		// to do
	    return {
	        Sync: function (options) {
	            options.sync = true;
	            return Conduit.call(this, options)
	        },
	        Async: function (options) {
	            return Conduit.call(this, options);
	        }
	    }
	};
    /*
     * Channel
     */
    var ChannelDefinition = function (channelName) {
        this.channel = channelName || _ServiceBus.configuration.DEFAULT_CHANNEL;
        this.initialize();
    };
    ChannelDefinition.prototype.initialize = function () {
    	console.log('CORE: ServiceBus ChannelDefinition.prototype.initialize() called');
        // to do
    };
    ChannelDefinition.prototype.subscribe = function () {
    	console.log('CORE: ServiceBus ChannelDefinition.prototype.subscribe() called');
    	// to do
    };
    ChannelDefinition.prototype.publish = function () {
    	console.log('CORE: ServiceBus ChannelDefinition.prototype.publish() called');
    	// to do
    };
    /*
     * Subscription
     */
    var SubscriptionDefinition = function (channel, topic, callback) {
        if (arguments.length !== 3) {
            throw new Error("You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.");
        }
        if (topic.length === 0) {
            throw new Error("Topics cannot be empty");
        }
        this.channel = channel;
        this.topic = topic;
        this.subscribe(callback);
    };
    SubscriptionDefinition.prototype = {	
    	// to do
    };
    /*
     * ServiceBus Functions
	 */
/*	 
	_ServiceBus.subscribe = new Conduit.Sync({
        target: subscribe,
        context: _ServiceBus
    });
*/




    return _ServiceBus;
});
