var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            ID: "INTEGER",
            post_title: "TEXT",
            post_content: "TEXT",
            logo: "TEXT"
        },
        URL: "http://conference.phpbenelux.eu/2015/api/phpbenelux/sponsors",
        debug: 0,
        deleteAllOnFetch: true,
        useStrictValidation: 0,
        parentNode: "posts",
        adapter: {
            idAttribute: "ID",
            type: "sqlrest",
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

model = Alloy.M("sponsor", exports.definition, []);

collection = Alloy.C("sponsor", exports.definition, model);

exports.Model = model;

exports.Collection = collection;