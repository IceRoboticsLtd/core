/*
 * ModelBase
 */
define(function () {
    console.log('CORE: modelBase called');
    function modelBase(title) {
        this.title = title;
    };
    modelBase.prototype = {
        getTitle: function () {
        console.log('CORE: modelBase getTitle() called');            
            return this.title;
        }
    };
    return modelBase;
});
