/*
 * ServiceBusBase
 */
define(function () {
    console.log('CORE: serviceBusBase called');
    function serviceBusBase(id) {
        this.id = id;
        this.bindingsResolver = {
    		cache: {},
        	regex: {},
        	compare: function (binding, topic) {
				// to do
			},
	        reset: function () {
	            this.cache = {};
	            this.regex = {};
	        }
		};// eof bindingsResolver

    };
    console.log('******** I AM HERE: line AA **********');
    /*
     * Channel
     */
    var ChannelDefinition = function (channelName) {
   		console.log('CORE: ServiceBusBase ChannelDefinition(channelName) called'); 	
    //    this.channel = channelName || this.configuration.DEFAULT_CHANNEL;
    //    this.initialize();
    };
    console.log('******** I AM HERE: line BB **********');    
    ChannelDefinition.prototype.initialize = function () {
    	console.log('CORE: ServiceBusBase ChannelDefinition.prototype.initialize() called');
        // to do
    };
    console.log('******** I AM HERE: line CC **********');    
    ChannelDefinition.prototype.subscribe = function () {
    	console.log('CORE: ServiceBusBase ChannelDefinition.prototype.subscribe() called');
    	// to do
    };
    console.log('******** I AM HERE: line DD **********');    
    ChannelDefinition.prototype.publish = function () {
    	console.log('CORE: ServiceBusBase ChannelDefinition.prototype.publish() called');
    	// to do
    };
    console.log('******** I AM HERE: line EE **********');
    /*
     * Subscription
     */
    var SubscriptionDefinition = function (channel, topic, callback) {
    	console.log('CORE: ServiceBusBase SubscriptionDefinition(channel, topic, callback) called');
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
    console.log('******** I AM HERE: line FF **********');    
    SubscriptionDefinition.prototype = {

    	// to do

		subscribe: function (callback) {
            // to do
        }

    	// to do
    };
    console.log('******** I AM HERE: line GG **********');



    console.log('******** I AM HERE: line HH **********');

    serviceBusBase.prototype = {
		configuration: {
            resolver: this.bindingsResolver,
            DEFAULT_CHANNEL: "/",
            SYSTEM_CHANNEL: "serviceBus"
        },
        subscriptions: {},
        wireTaps: [],
        ChannelDefinition: ChannelDefinition,
        SubscriptionDefinition: SubscriptionDefinition
        // to do

    };
    return serviceBusBase;
});
