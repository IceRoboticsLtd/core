/*
 * ModelBase
 */
define(function () {
    console.log('CORE: modelBase called');
    function modelBase(id) {
        this.id = id;
    };
    modelBase.prototype = {
        getTitle: function () {
            console.log('CORE: modelBase getTitle() called');            
            return this.title;
        },
        setTitle: function (title) {
            console.log('CORE: modelBase setTitle(title) called');            
            this.title = title;
        }        
    };
    return modelBase;
});
