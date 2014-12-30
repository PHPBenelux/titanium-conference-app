var args = arguments[0] || {};

function closeWindow(e) {
    $.aboutWindow.closeWindow();
}

Ti.App.fireEvent('setMainTitle', {
	title: 'Sponsors'
});