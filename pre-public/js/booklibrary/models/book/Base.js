/*
 * BookBase
 */
define(function () {
    console.log('CORE: BookBase called');	
    function BookBase(id, configs) {
        this.id = id;
        this.configs = configs;
		var Book = CORE.main.model.Main.Model.extend({
			defaults:{
				coverImage:"http://localhost:4000/img/placeholder.png",
				title:"No title",
				author:"Unknown",
				releaseDate:"Unknown",
				keywords:"None"
			}
		});
    };
    BookBase.prototype = {
        getConfigs: function () {
            console.log('CORE: BookBase getConfigs() called');            
            return this.configs;
        }
    };
    return BookBase;
});
