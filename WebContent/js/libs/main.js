require.config({
    //By default load any module IDs from scripts/app
    baseUrl: 'scripts/app',
    //except, if the module ID starts with "lib"
     paths: {
        lib: '../lib'
    }, 
    // load backbone as a shim
    shim: {
        'backbone': {
            //The underscore script dependency should be loaded before loading backbone.js
            deps: ['underscore'],
            // use the global 'Backbone' as the module name.
            exports: 'Backbone'
        }
    }
});