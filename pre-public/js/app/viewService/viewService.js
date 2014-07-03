/*
 * ViewServiceBase
 */
define(['./Base'], function (Base) {
	console.log('viewService called');
    var _ViewService = new Base('');
	
	// The world's simplest subscription
//    var channel = postal.channel("Name.Changed");
    // subscribe
//    var subscription = channel.subscribe(function(data) { $("#example1").html("Name: " + data.name); });
    // And someone publishes a first name change:
//    channel.publish({ name: "Dr. Who" });
	
    return _ViewService;
});
