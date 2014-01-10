function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.newsrow = Ti.UI.createTableViewRow({
        hasChild: true,
        layout: "vertical",
        model: "undefined" != typeof $model.__transform["id"] ? $model.__transform["id"] : $model.get("id"),
        id: "newsrow"
    });
    $.__views.newsrow && $.addTopLevelView($.__views.newsrow);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        top: 5,
        bottom: 5,
        left: "30px",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "titleLabel",
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title")
    });
    $.__views.newsrow.add($.__views.titleLabel);
    $.__views.postDateLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        top: 5,
        bottom: 5,
        left: "30px",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "postDateLabel",
        text: "undefined" != typeof $model.__transform["date"] ? $model.__transform["date"] : $model.get("date")
    });
    $.__views.newsrow.add($.__views.postDateLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;