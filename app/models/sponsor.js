exports.definition = {
	config: {
		columns: {
		    "ID": "INTEGER",
		    "post_title": "TEXT",
		    "post_content": "TEXT",
		    "logo": "TEXT"
		},
		URL: 'http://conference.phpbenelux.eu/2015/api/phpbenelux/sponsors',
		debug: 0,
		deleteAllOnFetch: true,
		useStrictValidation: 0,
		parentNode: "posts",
		adapter: {
			idAttribute: "ID",
			type: "sqlrest",
			collection_name: "sponsor"
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