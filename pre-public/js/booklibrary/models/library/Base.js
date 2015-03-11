/*
 * LibraryBase
 */
define(function () {
    console.log('CORE: LibraryBase called');	
    function LibraryBase(id, configs) {
        this.id = id;
        this.configs = configs;
		//Library is a Backbone collection that expects an array of  objects that it can use to create Book models.
		var Library = CORE.main.model.Main.Collection.extend({
			model:Book
		});
		
		alert("Hello from LibraryBase: Library = "); // FOR TESTING ONLY
		alert(Library);
		
    };
    LibraryBase.prototype = {
        getConfigs: function () {
            console.log('CORE: LibraryBase getConfigs() called');            
            return this.configs;
        }
    };
    return LibraryBase;
});
