exports.definition = {
	config: {
		columns: {
		    "ID": "integer",
		    "post_title": "string",
		    "post_content": "string",
		    "logo": "string"
		},
		URL: 'http://conference.phpbenelux.eu/2014/api/phpbenelux/sponsors',
		debug: 0,
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