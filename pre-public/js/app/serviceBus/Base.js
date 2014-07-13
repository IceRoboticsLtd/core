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
    serviceBusBase.prototype = {
		configuration: {
            resolver: this.bindingsResolver,
            DEFAULT_CHANNEL: "/",
            SYSTEM_CHANNEL: "serviceBus"
        }


    };
    return serviceBusBase;
});
