var args = arguments[0] || {};

function closeWindow(e) {
    $.aboutWindow.closeWindow();
}

function loadSponsors(collection, response, options) {		
	var sponsors = collection.toJSON();
	for (var i = 0, iLen = sponsors.length; i < iLen; i++) {
		var sponsorBlock = Alloy.createController('sponsorblock', {
			name: sponsors[i].post_title,
			logo: sponsors[i].logo
		}).getView();
        $.sponsorsView.add(sponsorBlock);
	}
	loader.hide();
};

loader.show();

Ti.App.fireEvent('setMainTitle', {
	title: 'About'
});
Alloy.Collections.sponsor.fetch({ success: loadSponsors, error: loader.hide });