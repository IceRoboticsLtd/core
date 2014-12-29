/*
 * Page
 */
var QuizEngine = (function(){
	console.log('CORE: Page called');
    var Application = Marionette.Application.extend({});

    var application = new Application();

    application.addRegions({
        header: '[data-region=header]', // Not used right now
        body: '[data-region=body]',
        footer: '[data-region=footer]' // Not used right now
    });

    // application.on('initialize:after', function() { // Marionette 1 version
	application.on('start', function() { // Marionette 2 version
        console.log('CORE: Page start event caught');
        Backbone.history.start();
    });

    return application;
})();