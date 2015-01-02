var args = arguments[0] || {},
    dispatcher = require('dispatcher');

dispatcher.trigger('setMainTitle', {
	title: 'Crew'
});

$.init = function() {

};

$.crew.addEventListener('open', $.init);

$.cleanup = function() {

    // let Alloy clean up listeners to global collections for data-binding
    // always call it since it'll just be empty if there are none
    $.destroy();

    // remove all event listeners on the controller
    $.off();

    // and custom global dispatchers (all at once, via context)
    dispatcher.off(null, null, $);
};

$.crew.addEventListener('close', $.cleanup);
