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
		deleteAllOnFetch: true,
		parentNode: function(data) {
		    var entries = [];
		    
		    _.each(data.posts, function(_entry){
		        
                // Handle items without an assigned speaker     
                if (_entry.speaker.length == 0 || !_entry.speaker) {
                    _entry.speaker = [{
                        post_title: 'PHPBenelux',
                        post_content: '',
                        picture_src: ''
                    }];
                }
                
		        var post = {};
		        post.id = _entry.id;
		        post.title = _entry.title,
                post.content = _entry.content,
                post.speaker = _entry.speaker[0].post_title,
                post.bio = _entry.speaker[0].post_content,
                post.picture = _entry.speaker[0].picture_src,
                post.startDate = _entry.timestamp_start,
                post.endDate = _entry.timestamp_end,
                post.room = _entry.room.post_title,
                post.level = _entry.talk_level,
                post.type = _entry.talk_type,
		        
		        entries.push(post);
		    });
		    
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
		});

		return Collection;
	}
};