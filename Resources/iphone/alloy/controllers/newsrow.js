function Controller() {
    function openDetail() {
        var newsDetailWin = Alloy.createController("newsdetail", args).getView();
        Alloy.Globals.navWindow.openWindow(newsDetailWin, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newsrow = Ti.UI.createTableViewRow({
        layout: "vertical",
        id: "newsrow"
    });
    $.__views.newsrow && $.addTopLevelView($.__views.newsrow);
    openDetail ? $.__views.newsrow.addEventListener("click", openDetail) : __defers["$.__views.newsrow!click!openDetail"] = true;
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "titleLabel"
    });
    $.__views.newsrow.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "postDateLabel"
    });
    $.__views.newsrow.add($.__views.postDateLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = Ti.Network.decodeURIComponent(args.title);
    $.postDateLabel.text = args.postDate;
    __defers["$.__views.newsrow!click!openDetail"] && $.__views.newsrow.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;