/*
 * BookBase
 */
define(function () {
    console.log('CORE: BookBase called');	
    function BookBase(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    BookBase.prototype = {
        getConfigs: function () {
            console.log('CORE: BookBase getConfigs() called');            
            return this.configs;
        }
    };
    return BookBase;
});
