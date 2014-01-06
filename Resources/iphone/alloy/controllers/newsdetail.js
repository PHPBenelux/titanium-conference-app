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
    var __alloyId16 = [];
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        title: "Back",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId16.push($.__views.backButton);
    closeWindow ? $.__views.backButton.addEventListener("click", closeWindow) : __defers["$.__views.backButton!click!closeWindow"] = true;
    $.__views.__alloyId14 = Ti.UI.iOS.createToolbar({
        items: __alloyId16,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId14"
    });
    $.__views.newsDetailWindow.add($.__views.__alloyId14);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        id: "titleLabel"
    });
    $.__views.newsDetailWindow.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        id: "postDateLabel"
    });
    $.__views.newsDetailWindow.add($.__views.postDateLabel);
    $.__views.contentLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 10,
        id: "contentLabel"
    });
    $.__views.newsDetailWindow.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title;
    $.contentLabel.text = args.content;
    $.postDateLabel.text = args.postDate;
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;