function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "crewblock";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.crewblock = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "crewblock"
    });
    $.__views.crewblock && $.addTopLevelView($.__views.crewblock);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "nameLabel"
    });
    $.__views.crewblock.add($.__views.nameLabel);
    $.__views.pictureImage = Ti.UI.createImageView({
        id: "pictureImage"
    });
    $.__views.crewblock.add($.__views.pictureImage);
    $.__views.contentLabel = Ti.UI.createWebView({
        id: "contentLabel"
    });
    $.__views.crewblock.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.pictureImage.image = args.picture;
    $.nameLabel.text = args.name;
    $.contentLabel.html = args.content;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;