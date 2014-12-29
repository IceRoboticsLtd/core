/*
 * PageControllerBase
 */
define(function () {
    console.log('CORE: pageControllerBase called');	
    function pageControllerBase(configs) {
        this.configs = configs;
    };
    pageControllerBase.prototype = {
        getConfigs: function () {
            console.log('CORE: pageControllerBase getConfigs() called');            
            return this.configs;
        }
    };
    return pageControllerBase;
});
