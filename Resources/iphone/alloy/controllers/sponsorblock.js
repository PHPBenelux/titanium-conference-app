function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sponsorblock";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.sponsorblock = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "sponsorblock"
    });
    $.__views.sponsorblock && $.addTopLevelView($.__views.sponsorblock);
    $.__views.logoImage = Ti.UI.createImageView({
        id: "logoImage"
    });
    $.__views.sponsorblock.add($.__views.logoImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    imagecache = require("imagecache");
    imagecache.cachedImageView("sponsorimages", args.logo, $.logoImage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;