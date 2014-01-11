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
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "crewblock"
    });
    $.__views.crewblock && $.addTopLevelView($.__views.crewblock);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        id: "nameLabel"
    });
    $.__views.crewblock.add($.__views.nameLabel);
    $.__views.pictureImage = Ti.UI.createImageView({
        borderRadius: 5,
        id: "pictureImage"
    });
    $.__views.crewblock.add($.__views.pictureImage);
    $.__views.contentLabel = Ti.UI.createWebView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        disableBounce: true,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        id: "contentLabel"
    });
    $.__views.crewblock.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.pictureImage.image = args.picture;
    $.nameLabel.text = args.name;
    $.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;