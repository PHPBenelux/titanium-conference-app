exports.definition = {
	config: {
		columns: {
		    "id": "TEXT",
		    "title": "TEXT",
		    "content": "TEXT",
		    "speaker": "TEXT",
		    "bio": "TEXT",
		    "picture": "TEXT",
		    "startDate": "TEXT",
		    "endDate": "TEXT",
		    "room": "TEXT"
		},
		URL: 'http://lanyrd.com/2015/phpbnl15/schedule/0e8fa288ad3fb52d.v1.json',
		debug: 0,
		useStrictValidation: 0,
		deleteAllOnFetch: true,
		initFetchWithLocalData: true,
		parentNode: function(data) {
			var entries = [],
				entry,
				i,j;

			for (i = 0; i < data.sessions.length; i++) {
				for (j = 0; j < data.sessions[i].sessions.length; j++) {
					session = data.sessions[i].sessions[j];

					entry = {
						id: session.id,
						title : session.title,
						content: session.abstract,
						startDate: session.start_time_epoch,
						endDate: session.end_time_epoch,
						room: session.space
					};

					entries.push(entry);
				}
			}

			return entries;
		},
		adapter: {
			idAttribute: "id",
			type: "sqlrest",
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
			comparator: function(item) {
				return item.get('startdate');
			}
		});

		return Collection;
	}
};