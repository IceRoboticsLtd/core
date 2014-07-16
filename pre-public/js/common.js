/*
 * Common
 */
var global = self;
//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        lodash: 'lodash',
        expect: 'expect',
        mocha: 'mocha',
        jquery: 'jquery',
        jquerypp: 'jquerypp.custom',
        framewarp: 'framewarp' 
        //bootstrap: 'postal/bower/bootstrap/dist/js/bootstrap',
        //conduitjs: 'postal/bower/conduitjs/lib/conduit',
        //postal: 'postal/lib/postal'
    },
    // A shim automatically adds a wrapper around a javascript library 
    // that makes it AMD-compatible, requirejs-friendly.
    shim: {
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        lodash: {
            exports: 'lodash'
        },
        expect: {
            exports: 'expect'
        },
        mocha: {
            exports: 'mocha'
        }
    //    bootstrap: {
    //        deps: ['jquery'] // bootstrap has nothing to export
    //    }
    //    conduitjs: {
    //        deps: ['bootstrap','expect','mocha'],
    //        exports: 'conduitjs'
    //    }
    //    postal: {
    //        deps: ['jquery','lodash','expect','mocha','bootstrap','conduitjs'],
    //        exports: 'postal'
    //    }   
    }
});
