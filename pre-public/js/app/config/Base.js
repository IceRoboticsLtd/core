/*
 * ConfigBase
 */
define(function () {
    console.log('CORE: configBase called');	
    function configBase(config) {
        this.config = config;
    };
    configBase.prototype = {
        getConfig: function () {
            console.log('CORE: configBase getConfig() called');            
            return this.config;
        }
    };
    return configBase;
});
