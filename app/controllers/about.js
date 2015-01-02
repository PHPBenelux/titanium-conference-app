var args = arguments[0] || {},
    dispatcher = require('dispatcher');

$.init = function() {

};

$.about.addEventListener('open', $.init);

$.cleanup = function() {

    // let Alloy clean up listeners to global collections for data-binding
    // always call it since it'll just be empty if there are none
    $.destroy();

    // remove all event listeners on the controller
    $.off();

    // and custom global dispatchers (all at once, via context)
    dispatcher.off(null, null, $);
};

$.about.addEventListener('close', $.cleanup);

dispatcher.trigger('setMainTitle', {
	title: 'About'
});