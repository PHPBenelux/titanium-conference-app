var args = arguments[0] || {};
var httpClientDefaults = {
		onerror: function(e) {
			Ti.API.debug(e.error);
			alert('Unable to retrieve the data');
			}
	};

function closeWindow(e) {
    $.aboutWindow.closeWindow();
}

function loadAbout() {
	var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);	
	httpClient.open('GET', Alloy.CFG.apiUrl + 'get_page/?slug=about');
	httpClient.send();
	httpClient.onload = function() {
		var json = JSON.parse(this.responseText);
		if (json.length == 0) {
			$.aboutLabel.html = Alloy.CFG.htmlPrepend + "Text could not be updated" + Alloy.CFG.htmlSuffix;
		}
		
		$.aboutLabel.html = Alloy.CFG.htmlPrepend + json.page.content + Alloy.CFG.htmlSuffix;
	};	
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
}

loadAbout();

Alloy.Collections.sponsor.fetch({ success: loadSponsors });
Alloy.Collections.crew.fetch({ success: loadCrew });