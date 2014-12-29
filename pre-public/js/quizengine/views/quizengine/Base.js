/*
 * QuizEngineBase
 */
define(function () {
    console.log('CORE: QuizEngineBase called');	
    function quizEngineBase(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    quizEngineBase.prototype = {
        getConfigs: function () {
            console.log('CORE: quizEngineBase getConfigs() called');            
            return this.configs;
        }
    };
    return quizEngineBase;
});
