function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsdetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.newsDetailWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "newsDetailWindow",
        title: "News item"
    });
    $.__views.newsDetailWindow && $.addTopLevelView($.__views.newsDetailWindow);
    $.__views.__alloyId9 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical",
        id: "__alloyId9"
    });
    $.__views.newsDetailWindow.add($.__views.__alloyId9);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "titleLabel"
    });
    $.__views.__alloyId9.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10
        },
        id: "postDateLabel"
    });
    $.__views.__alloyId9.add($.__views.postDateLabel);
    $.__views.contentLabel = Ti.UI.createWebView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        id: "contentLabel"
    });
    $.__views.__alloyId9.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title;
    $.contentLabel.html = args.content + Alloy.CFG.css;
    $.postDateLabel.text = args.postDate;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;