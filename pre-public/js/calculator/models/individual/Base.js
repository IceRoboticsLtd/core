/*
 * Base
 */
define(function () {
    console.log('CORE: Base called');	
    function individualBase(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    individualBase.prototype = {
        getConfigs: function () {
            console.log('CORE: Base getConfigs() called');            
            return this.configs;
        }
    };
    return individualBase;
});
