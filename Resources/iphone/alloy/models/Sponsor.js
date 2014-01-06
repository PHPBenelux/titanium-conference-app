exports.definition = {
    config: {
        columns: {
            ID: "integer",
            post_title: "string",
            post_content: "string",
            logo: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "sponsor"
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

model = Alloy.M("sponsor", exports.definition, []);

collection = Alloy.C("sponsor", exports.definition, model);

exports.Model = model;

exports.Collection = collection;