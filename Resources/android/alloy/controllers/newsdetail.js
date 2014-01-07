function Controller() {
    function closeWindow() {
        $.newsDetailWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsdetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newsDetailWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "newsDetailWindow",
        title: "News item"
    });
    $.__views.newsDetailWindow && $.addTopLevelView($.__views.newsDetailWindow);
    $.__views.__alloyId18 = Ti.UI.createScrollView({
        id: "__alloyId18"
    });
    $.__views.newsDetailWindow.add($.__views.__alloyId18);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        id: "titleLabel"
    });
    $.__views.__alloyId18.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        id: "postDateLabel"
    });
    $.__views.__alloyId18.add($.__views.postDateLabel);
    $.__views.contentLabel = Ti.UI.createWebView({
        fontSize: 10,
        id: "contentLabel"
    });
    $.__views.__alloyId18.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title;
    $.contentLabel.html = args.content;
    $.postDateLabel.text = args.postDate;
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;