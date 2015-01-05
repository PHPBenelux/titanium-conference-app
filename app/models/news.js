var moment = require('alloy/moment');
exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER PRIMARY KEY",
		    "title": "TEXT",
		    "content": "TEXT",
		    "date": "TEXT",
		    "modified": "TEXT"
		},
		URL: 'http://conference.phpbenelux.eu/2015/api/get_recent_posts',
		debug: 0,
		useStrictValidation: 0,
		deleteAllOnFetch: true,
		initFetchWithLocalData: true,
		parentNode: "posts",
		adapter: {
			idAttribute: "id",
			type: "sqlrest",
			collection_name: "news",

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
              comparator: function(item) {
                // order by 'date' descending
                return -parseInt(moment(item.get('date')).format('X'));
              }
		});

		return Collection;
	}
};