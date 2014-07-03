/*
 * ConfigBase
 */
define(function () {
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
