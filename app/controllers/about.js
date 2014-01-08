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
			$.aboutLabel.html = "Text could not be updated" + Alloy.CFG.css;
		}
		
		$.aboutLabel.html = json.page.content + Alloy.CFG.css;
	};	
}

function loadSponsors() {
	var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);	
	httpClient.open('GET', Alloy.CFG.apiUrl + 'phpbenelux/sponsors');
	httpClient.send();
	httpClient.onload = function() {
		var json = JSON.parse(this.responseText);
		if (json.length == 0) {
			noDataLbl = Ti.UI.createLabel({text: "No sponsor data available", height: Ti.UI.Size});
			$.sponsorsView.add(noDataLbl);
		}
		
		var sponsors = json.posts;
		for (var i = 0, iLen = sponsors.length; i < iLen; i++) {
			var sponsorBlock = Alloy.createController('sponsorblock', {
				name: sponsors[i].post_title,
				logo: sponsors[i].logo
			}).getView();
            $.sponsorsView.add(sponsorBlock);
		}
	};
}

function loadCrew() {
	var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);	
	httpClient.open('GET', Alloy.CFG.apiUrl + 'phpbenelux/crew');
	httpClient.send();
	httpClient.onload = function() {
		var json = JSON.parse(this.responseText);
		if (json.length == 0) {
			noDataLbl = Ti.UI.createLabel({text: "No crew data available",height: Ti.UI.Size});
			$.crewView.add(noDataLbl);
		}
		
		var crew = json.posts;
		for (var i = 0, iLen = crew.length; i < iLen; i++) {
			var crewBlock = Alloy.createController('crewblock', {
				name: crew[i].post_title,
				content: crew[i].post_content,
				picture: crew[i].picture
			}).getView();
            $.crewView.add(crewBlock);
		}
	};
}

loadAbout();
loadCrew();
loadSponsors();
