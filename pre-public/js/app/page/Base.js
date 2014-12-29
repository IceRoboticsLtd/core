/*
 * PageBase
 */
define(function () {
    console.log('CORE: pageBase called');	
    function pageBase(configs) {
        this.configs = configs;
    };
    pageBase.prototype = {
        getConfigs: function () {
            console.log('CORE: pageBase getConfigs() called');            
            return this.configs;
        }
    };
    return pageBase;
});
