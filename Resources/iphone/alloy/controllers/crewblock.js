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
        top: 5,
        bottom: 5,
        font: {
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "nameLabel"
    });
    $.__views.crewblock.add($.__views.nameLabel);
    $.__views.pictureImage = Ti.UI.createImageView({
        borderRadius: 5,
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
    imagecache = require("imagecache");
    imagecache.cachedImageView("crewimages", args.picture, $.pictureImage);
    $.nameLabel.text = args.name;
    $.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;