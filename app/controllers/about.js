var args = arguments[0] || {};
var overlay = require("overlayHUD");
var blocksLoaded = 0;
var loader = overlay.load();

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
	setLoaderOverlay();
};


function loadCrew(collection, response, options) {		
	var crew = collection.toJSON();
	for (var i = 0, iLen = crew.length; i < iLen; i++) {
		var crewBlock = Alloy.createController('crewblock', {
			name: crew[i].post_title,
			content: crew[i].post_content,
			picture: crew[i].picture
		}).getView();
        $.crewView.add(crewBlock);
	}
    setLoaderOverlay();
}

function setLoaderOverlay() {
    blocksLoaded++;
    if (blocksLoaded == 2) {
        loader.hide();
    }
}
loader.show();
Alloy.Collections.sponsor.fetch({ success: loadSponsors, error: setLoaderOverlay });
Alloy.Collections.crew.fetch({ success: loadCrew, error: setLoaderOverlay });