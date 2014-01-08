exports.definition = {
	config: {
		columns: {
		    "id": "integer",
		    "title": "string",
		    "content": "string",
		    "speaker": "string",
		    "bio": "string",
		    "picture": "string",
		    "startDate": "date",
		    "endDate": "date",
		    "room": "string",
		    "level": "string",
		    "type": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "schedule"
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