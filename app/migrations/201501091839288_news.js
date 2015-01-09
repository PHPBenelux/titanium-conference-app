migration.up = function(db) {
	db.dropTable();
	db.createTable({
		columns: {
		    "id": "INTEGER PRIMARY KEY",
		    "title": "TEXT",
		    "content": "TEXT",
		    "date": "TEXT",
		    "modified": "TEXT"
		}
	});
};

migration.down = function(db) {

};
