exports.definition = {
    config: {
        columns: {
            id: "integer",
            title: "string",
            content: "string",
            modified: "datetime"
        },
        adapter: {
            type: "sql",
            collection_name: "news"
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

model = Alloy.M("news", exports.definition, []);

collection = Alloy.C("news", exports.definition, model);

exports.Model = model;

exports.Collection = collection;