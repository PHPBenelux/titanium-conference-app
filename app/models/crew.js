exports.definition = {
	config: {
		columns: {
		    "ID": "INTEGER",
		    "title": "TEXT",
		    "content": "TEXT",
		    "thumbnail": "TEXT"
		},
		URL: 'http://conference.phpbenelux.eu/2015/api/get_recent_posts/?post_type=ait-team&order_by=title',
		debug: 0,
		deleteAllOnFetch: true,
		useStrictValidation: 0,
		parentNode: "posts",
		adapter: {
			idAttribute: "ID",
			type: "sqlrest",
			collection_name: "crew"
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
			// extended functions and properties go here
		});

		return Collection;
	}
};