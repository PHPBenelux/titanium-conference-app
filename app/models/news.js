exports.definition = {
	config: {
		columns: {
		    "id": "integer",
		    "title": "string",
		    "content": "string",
		    "modified": "datetime"
		},
		adapter: {
			type: "sql",
			collection_name: "news"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			sync: function() {
				var data = [];
				var httpClient = Ti.Network.createHTTPClient({
					onerror: function(e) {
						Ti.API.debug(e.error);
					}
				});
				
				httpClient.open('GET', Alloy.CFG.apiUrl + 'get_recent_posts');
				httpClient.send();
				httpClient.onload = function() {
					var json = JSON.parse(this.responseText);					
					var news = json.posts;
					
					for (var i = 0, iLen = news.length; i < iLen; i++) {
						var postDate = moment(news[i].date);
						data.push(Alloy.createController('newsrow', {
							title: news[i].title,
							content: news[i].content,
							postDate: postDate.format('DD MMM YYYY, HH:mm')
						}).getView());
					}
				};
			}
		});

		return Collection;
	}
};