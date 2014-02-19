function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsdetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.newsDetailWindow = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "newsDetailWindow",
        title: "News item"
    });
    $.__views.newsDetailWindow && $.addTopLevelView($.__views.newsDetailWindow);
    $.__views.detailScrollView = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical",
        contentWidth: "100%",
        id: "detailScrollView"
    });
    $.__views.newsDetailWindow.add($.__views.detailScrollView);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        id: "titleLabel"
    });
    $.__views.detailScrollView.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10
        },
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        id: "postDateLabel"
    });
    $.__views.detailScrollView.add($.__views.postDateLabel);
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
    $.__views.detailScrollView.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    var decoder = require("entitydecoder");
    $.titleLabel.text = decoder.decode(args.title);
    $.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;
    $.postDateLabel.text = "Posted on " + moment(args.date).format("DD MMM YYYY, HH:mm");
    Ti.App.fireEvent("setMainTitle", {
        title: "News"
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;