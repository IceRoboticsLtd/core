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


    console.log('******** I AM HERE: line AAA **********');


    /*
     * Conduit
	 */
	function Conduit(options) { 
		console.log('CORE: ServiceBus Conduit(options) called');
		if (typeof options.target !== "function") {
            throw new Error("You can only make functions into Conduits.");
        }
        var _steps = {
            pre: options.pre || [],
            post: options.post || [],
            all: []
        };
        var _defaultContext = options.context;
        var _target = options.target;
        var _targetStep = {
            isTarget: true,
            fn: options.sync ?
            function () {
                var args = Array.prototype.slice.call(arguments, 0);
                var result = _target.apply(_defaultContext, args);
                return result;
            } : function (next) {
                var args = Array.prototype.slice.call(arguments, 1);
                args.splice(1, 1, _target.apply(_defaultContext, args));
                next.apply(this, args);
            }
        };
        var _genPipeline = function () {
            _steps.all = _steps.pre.concat([_targetStep].concat(_steps.post));
        };
        _genPipeline();
		var conduit = function () {
			// to do
		};	
		return conduit;
    };
	Conduit.Sync = function (options) {
    	console.log('CORE: ServiceBus Conduit.Sync(options) called');
        options.sync = true;
        return Conduit.call(this, options)
    };
	Conduit.Async = function (options) {
    	console.log('CORE: ServiceBus Conduit.Async(options) called');
        return Conduit.call(this, options);
    };

    console.log('******** I AM HERE: line BBB **********');	
    function subscribe(options) {
    	console.log('CORE: ServiceBusBase subscribe(options) called');
        var subDef = new SubscriptionDefinition(options.channel || _ServiceBus.configuration.DEFAULT_CHANNEL, options.topic, options.callback);    	
		// to do

        return subDef;
    };
    console.log('******** I AM HERE: line CCC **********');
    /*
     * ServiceBus Functions
	 */
	_ServiceBus.subscribe = new Conduit.Sync({
        target: subscribe,
        context: _ServiceBus
    });


    console.log('******** I AM HERE: line ZZZ **********');
    return _ServiceBus;
});
