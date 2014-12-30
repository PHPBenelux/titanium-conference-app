function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId53(e) {
        if (e && e.fromAdapter) return;
        __alloyId53.opts || {};
        var models = __alloyId52.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId49 = models[i];
            __alloyId49.__transform = cleanData(__alloyId49);
            var __alloyId51 = Alloy.createController("newsrow", {
                $model: __alloyId49,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId51.getViewEx({
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
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
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
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        color: "#E31837",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 16,
            fontWeight: "bold"
        },
        message: "Loading...",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "activityIndicator"
    });
    $.__views.newsWindow.add($.__views.activityIndicator);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.newsWindow.add($.__views.table);
    var __alloyId52 = Alloy.Collections["news"] || news;
    __alloyId52.on("fetch destroy change add remove reset", __alloyId53);
    exports.destroy = function() {
        __alloyId52.off("fetch destroy change add remove reset", __alloyId53);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    var decoder = require("entitydecoder");
    var hideActivity = function() {
        $.newsWindow.remove($.activityIndicator);
    };
    $.table.addEventListener("click", function(e) {
        var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON();
        var newsDetailWin = Alloy.createController("newsdetail", modelData).getView();
        Alloy.Globals.mainView.contentView.add(newsDetailWin);
    });
    var style;
    style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
    $.activityIndicator.setStyle(style);
    $.activityIndicator.show();
    Alloy.Collections.news.fetch({
        success: hideActivity,
        error: hideActivity
    });
    Ti.App.fireEvent("setMainTitle", {
        title: "News"
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;