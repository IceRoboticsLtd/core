/*
 * BookLibraryBase
 */
define(function () {
    console.log('CORE: bookLibraryBase called');	
    function bookLibraryBase(id, configs) {
        this.id = id;
        this.configs = configs;
    };
    bookLibraryBase.prototype = {
        getConfigs: function () {
            console.log('CORE: bookLibraryBase getConfigs() called');            
            return this.configs;
        }
    };
    return bookLibraryBase;
});
