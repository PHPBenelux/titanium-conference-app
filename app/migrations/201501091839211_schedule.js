migration.up = function(db) {
	db.dropTable();
	db.createTable({   
		columns: {
		    "id": "TEXT",
		    "title": "TEXT",
		    "content": "TEXT",
		    "speaker": "TEXT",
		    "startDate": "TEXT",
		    "endDate": "TEXT",
		    "room": "TEXT"
		}
	});
};

migration.down = function(db) {

};
