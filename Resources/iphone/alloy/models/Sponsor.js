exports.definition = {
    config: {
        columns: {
            ID: "integer",
            post_title: "string",
            post_content: "string",
            logo: "string"
        },
        URL: "http://conference.phpbenelux.eu/2014/api/phpbenelux/sponsors",
        debug: 0,
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

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("sponsor", exports.definition, []);

collection = Alloy.C("sponsor", exports.definition, model);

exports.Model = model;

exports.Collection = collection;