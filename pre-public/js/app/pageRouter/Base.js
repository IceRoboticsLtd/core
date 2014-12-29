/*
 * PageRouterBase
 */
define(function () {
    console.log('CORE: pageRouterBase called');	
    function pageRouterBase(configs) {
        this.configs = configs;
    };
    pageRouterBase.prototype = {
        getConfigs: function () {
            console.log('CORE: pageRouterBase getConfigs() called');            
            return this.configs;
        }
    };
    return pageRouterBase;
});
