var args = arguments[0] || {};

function openDetail(e) {
	alert('row index = ' + JSON.stringify(e.index));
}

var data = [];
var httpClient = Ti.Network.createHTTPClient({
	onerror: function(e) {
		Ti.API.debug(e.error);
		alert('Unable to retrieve the data');
	}
});

httpClient.open('GET', 'http://conference.phpbenelux.eu/2014/api/phpbenelux/crew/');
httpClient.send();
httpClient.onload = function() {
	var json = JSON.parse(this.responseText);
	if (json.length == 0) {
		$.table.headerTitle = "No data";
	}
	
	var crew = json.posts;
	for (var i = 0, iLen = crew.length; i < iLen; i++) {
		data.push(Alloy.createController('crewrow', {
			picture: crew[i].picture,
			name: crew[i].post_title
		}).getView());
		
		Ti.API.info(crew[i].picture);
		Ti.API.info(crew[i].post_title);
	}
	
	$.table.setData(data);
};