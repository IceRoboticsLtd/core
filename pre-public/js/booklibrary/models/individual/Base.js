/*
 * IndividualBase
 */
define(function () {
    console.log('CORE: individualBase called');	
    function individualBase(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    individualBase.prototype = {
        getConfigs: function () {
            console.log('CORE: individualBase getConfigs() called');            
            return this.configs;
        }
    };
    return individualBase;
});
