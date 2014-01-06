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
    $.__views.pictureView = Ti.UI.createImageView({
        id: "pictureView"
    });
    $.__views.crewrow.add($.__views.pictureView);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        id: "nameLabel"
    });
    $.__views.crewrow.add($.__views.nameLabel);
    $.__views.bioLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 10,
        id: "bioLabel"
    });
    $.__views.crewrow.add($.__views.bioLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.picture.image = args.picture;
    $.name.text = args.name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;