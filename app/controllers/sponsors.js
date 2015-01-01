var args = arguments[0] || {},
    dispatcher = require('dispatcher');

function closeWindow(e) {
    $.aboutWindow.closeWindow();
}

dispatcher.trigger('setMainTitle', {
	title: 'Sponsors'
});