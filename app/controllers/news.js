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

httpClient.open('GET', 'http://conference.phpbenelux.eu/2014/api/get_recent_posts');
httpClient.send();
httpClient.onload = function() {
	var json = JSON.parse(this.responseText);
	if (json.length == 0) {
		$.table.headerTitle = "No data";
	}
	
	var news = json.posts;
	for (var i = 0, iLen = news.length; i < iLen; i++) {
		data.push(Alloy.createController('newsrow', {
			title: news[i].title,
			content: news[i].content,
			postDate: news[i].modified
		}).getView());
		
		Ti.API.info(news[i].title);
		Ti.API.info(news[i].content);
		Ti.API.info(news[i].modified);
	}
	
	$.table.setData(data);
};