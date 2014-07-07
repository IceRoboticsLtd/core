/*
 * ModelEvent
 * An event is where something happening is captured.
 */
var ModelEvent123 = 1 << 0;
var ModelEvent456 = 1 << 1;
var ModelEventSubscribe = 1 << 2;

define(['./Base'], function (Base) {
    console.log('CORE: modelEvent called');
    var _ModelEvent = new Base('');

    // following this example, slightly
    // http://sandbox.thewikies.com/javascript-mvc-hello-world/index.2.html

    _ModelEvent.raiseEvent = function ( flag ) {
        // Check if ModelEvent123 was passed.
        if (flag & ModelEvent123) {
            console.log('CORE: modelEvent123 raised');            
            // Run the ModelController's show function.
            _ModelController.loadModel(123);
        }
        // Check if ModelEvent456 was passed.
        if (flag & ModelEvent456) {
            console.log('CORE: modelEvent456 raised');             
            // Run the ModelController's show function.
            _ModelController.loadModel(456);
        }
        // Check if ModelEventSubscribe was passed
        if (flag & ModelEventSubscribe) {
            console.log('CORE: modelEventSubscribe raised');          
            // Subscribe ModelService
            _ModelController.subscribeModelService();
        } 
    };
    return _ModelEvent;
});