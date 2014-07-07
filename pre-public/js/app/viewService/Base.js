/*
 * ViewServiceBase
 */
define(function () {
	console.log('CORE: viewServiceBase called');
    function viewServiceBase(id) {
        this.id = id;
    };
    viewServiceBase.prototype = {
		setServiceBus: function (serviceBus) {
			console.log('CORE: viewServiceBase setServiceBus(serviceBus) called');		
			this.serviceBus = serviceBus;
		}
    };
    return viewServiceBase;
});
