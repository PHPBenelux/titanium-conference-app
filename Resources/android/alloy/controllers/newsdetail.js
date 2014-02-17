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
        id: "newsDetailWindow",
        title: "News item"
    });
    $.__views.newsDetailWindow && $.addTopLevelView($.__views.newsDetailWindow);
    $.__views.detailScrollView = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        contentWidth: "100%",
        id: "detailScrollView"
    });
    $.__views.newsDetailWindow.add($.__views.detailScrollView);
    $.__views.titleLabel = Ti.UI.createLabel({
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "titleLabel"
    });
    $.__views.detailScrollView.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        id: "postDateLabel"
    });
    $.__views.detailScrollView.add($.__views.postDateLabel);
    $.__views.contentLabel = Ti.UI.createWebView({
        height: Ti.UI.SIZE,
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;