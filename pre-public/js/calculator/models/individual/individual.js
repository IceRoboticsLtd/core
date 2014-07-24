/*
 * Individual
 */
/////////////////////////// ON DOCUMENT READY /////////////////////////////
$(document).ready(function() {
    console.log('CORE: calculator model Individual: document ready');
    require(['../calculator/models/individual/Base'], function (Base) {
        console.log('CORE: individual called');
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });    
        var configs = {
            // to do
        };
        var Individual = new Base(uuid, configs);
        // Initial Setup
        // -------------

        // Save the previous value of the `Individual` variable, so that it can be
        // restored later on, if `noConflict` is used.
        var previousIndividual = global.Individual;

        // Create local references to array methods we'll want to use later.
        var array = [];
        var push = array.push;
        var slice = array.slice;
        var splice = array.splice;

        // Current version of the library. Keep in sync with `package.json`.
        Individual.VERSION = '1.1.0';

        // For Individual's purposes, jQuery, Zepto, or Ender owns the `$` variable.
        Individual.$ = $;

        // Runs Individual.js in *noConflict* mode, returning the `_Individual` variable
        // to its previous owner. Returns a reference to this Individual object.
        Individual.noConflict = function() {
            global.Individual = previousIndividual;
            return this;
        };

        // Individual.Model
        // --------------

        // Individual **Models** are the basic data object in the framework --
        // frequently representing a row in a table in a database on your server.
        // A discrete chunk of data and a bunch of useful, related methods for
        // performing computations and transformations on that data.

        // Create a new model with the specified attributes. A client id (`cid`)
        // is automatically generated and assigned for you.
        var Model = Individual.Model = function(attributes, options) {
            var attrs = attributes || {};
            options || (options = {});
            this.cid = _.uniqueId('c');
            this.attributes = {};
            if (options.collection) this.collection = options.collection;
            if (options.parse) attrs = this.parse(attrs, options) || {};
            attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
            this.set(attrs, options);
            this.changed = {};
            this.initialize.apply(this, arguments);
        };


        // more
        global.Individual = Individual; // FOR TEST ONLY!!!


        return Individual;         
    });
});