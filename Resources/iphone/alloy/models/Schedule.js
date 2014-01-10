exports.definition = {
    config: {
        columns: {
            id: "integer",
            title: "string",
            content: "string",
            speaker: "string",
            bio: "string",
            picture: "string",
            startDate: "date",
            endDate: "date",
            room: "string",
            level: "string",
            type: "string"
        },
        URL: "http://conference.phpbenelux.eu/2014/api/phpbenelux/schedule",
        debug: 0,
        useStrictValidation: 0,
        parentNode: "posts",
        adapter: {
            idAttribute: "id",
            type: "sqlrest",
            collection_name: "schedule"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("schedule", exports.definition, []);

collection = Alloy.C("schedule", exports.definition, model);

exports.Model = model;

exports.Collection = collection;