/*
 * ModelBase
 */
define(function () {
    console.log('modelBase called');
    function modelBase(title) {
        this.title = title;
    };
    modelBase.prototype = {
        getTitle: function () {
            return this.title;
        }
    };
    return modelBase;
});
