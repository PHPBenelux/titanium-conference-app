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
		URL: 'http://conference.phpbenelux.eu/2014/api/phpbenelux/schedule',
		debug: 0,
		useStrictValidation: 0,
		parentNode: "posts",
		adapter: {
			idAttribute: "id",
			type: "sqlrest",
			collection_name: "schedule",

            // optimise the amount of data transfer from remote server to app
            "addModifedToUrl": true,
            "lastModifiedColumn": "modified"
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