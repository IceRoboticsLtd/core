/*
 * PageRouter
 */
console.log('CORE: QuizEngine.Router called');
QuizEngine.Router = Marionette.AppRouter.extend({
    routes: {
        "": "redirectToMain"
    },

    redirectToMain: function() {
        console.log('CORE: QuizEngine.Router.redirectToMain called');
        Backbone.history.navigate('list', { trigger: true, replace: true});
    }
});

QuizEngine.addInitializer(function() {
    console.log('CORE: QuizEngine.addInitializer called');
    QuizEngine.router = new QuizEngine.Router();
});