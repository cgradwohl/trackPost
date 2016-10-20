// This is the js for the default/index.html view.

var app = function() {

    self = {};

    Vue.config.silent = false; // show all warnings

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});
