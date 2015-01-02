var args = arguments[0] || {},
    dispatcher = require('dispatcher');

dispatcher.trigger('setMainTitle', {
	title: 'Sponsors'
});