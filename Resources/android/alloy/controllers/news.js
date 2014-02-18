function Controller() {
    function __alloyId55(e) {
        if (e && e.fromAdapter) return;
        __alloyId55.opts || {};
        var models = __alloyId54.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId51 = models[i];
            __alloyId51.__transform = cleanData(__alloyId51);
            var __alloyId53 = Alloy.createController("newsrow", {
                $model: __alloyId51,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId53.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function cleanData(model) {
        var transform = model.toJSON();
        transform.title = decoder.decode(transform.title);
        transform.date = moment(transform.date).format("DD MMM YYYY, HH:mm");
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "news";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("news");
    $.__views.newsWindow = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "newsWindow",
        title: "News"
    });
    $.__views.newsWindow && $.addTopLevelView($.__views.newsWindow);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.newsWindow.add($.__views.table);
    var __alloyId54 = Alloy.Collections["news"] || news;
    __alloyId54.on("fetch destroy change add remove reset", __alloyId55);
    exports.destroy = function() {
        __alloyId54.off("fetch destroy change add remove reset", __alloyId55);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    var decoder = require("entitydecoder");
    var overlay = require("overlayHUD");
    var loader = overlay.load();
    $.table.addEventListener("click", function(e) {
        var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON();
        var newsDetailWin = Alloy.createController("newsdetail", modelData).getView();
        Alloy.Globals.mainView.contentView.add(newsDetailWin);
    });
    loader.show();
    Alloy.Collections.news.fetch({
        success: loader.hide,
        error: loader.hide
    });
    Ti.App.fireEvent("setMainTitle", {
        title: "News"
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;