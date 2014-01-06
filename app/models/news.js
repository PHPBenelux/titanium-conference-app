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
			// extended functions and properties go here
		});

		return Collection;
	}
};