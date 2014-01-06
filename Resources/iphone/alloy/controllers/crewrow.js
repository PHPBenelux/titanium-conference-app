function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "crewrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.crewrow = Ti.UI.createTableViewRow({
        id: "crewrow"
    });
    $.__views.crewrow && $.addTopLevelView($.__views.crewrow);
    $.__views.picture = Ti.UI.createImageView({
        id: "picture"
    });
    $.__views.crewrow.add($.__views.picture);
    $.__views.name = Ti.UI.createLabel({
        id: "name"
    });
    $.__views.crewrow.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.picture.image = args.picture;
    $.name.text = args.name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;