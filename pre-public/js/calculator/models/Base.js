/*
 * Base
 */
define(function () {
    console.log('CORE: Base called');	
    function Base(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    configBase.prototype = {
        getConfigs: function () {
            console.log('CORE: Base getConfigs() called');            
            return this.configs;
        }
    };
    return configBase;
});
