function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sponsorblock";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.sponsorblock = Ti.UI.createView({
        backgroundColor: "white",
        height: Ti.UI.SIZE,
        id: "sponsorblock"
    });
    $.__views.sponsorblock && $.addTopLevelView($.__views.sponsorblock);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "nameLabel"
    });
    $.__views.sponsorblock.add($.__views.nameLabel);
    $.__views.logoImage = Ti.UI.createImageView({
        id: "logoImage"
    });
    $.__views.sponsorblock.add($.__views.logoImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.logoImage.image = args.logo;
    $.nameLabel.text = args.name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;