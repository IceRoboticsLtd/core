/*
 * ModelBase
 */
define(function () {
    console.log('CORE: modelBase called');
    function modelBase(id) {
        this.id = id;
        this.keyValuePairs = [];
    };
    modelBase.prototype = {
        getTitle: function () {
            console.log('CORE: modelBase getTitle() called');            
            return this.title;
        },
        setTitle: function (title) {
            console.log('CORE: modelBase setTitle(title) called');            
            this.title = title;
        },
        getValue: function (key) {
            console.log('SKIN: appBase getValue(key) called'); 
            // To Do: search for key in keyValuePairs and retrieve its value           
            // return value;
        },
        setValue: function (key, value) {
            console.log('SKIN: appBase setValue(key, value) called'); 
            // To Do: search for key in keyValuePairs and updated its value           
            // value = value;
        },
        getKeyValuePairs: function () {
            console.log('SKIN: appBase getKeyValuePairs() called');             
            return this.keyValuePairs;
        },
        setKeyValuePairs: function (keyValuePairs) {
            console.log('SKIN: appBase setKeyValuePairs(keyValuePairs) called');         
            this.keyValuePairs = keyValuePairs;
        }        
    };
    return modelBase;
});
