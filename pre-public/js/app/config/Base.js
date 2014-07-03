/*
 * ConfigBase
 */
define(function () {
    console.log('configBase called');	
    function configBase(config) {
        this.config = config;
    };
    configBase.prototype = {
        getConfig: function () {
            return this.config;
        }
    };
    return configBase;
});
