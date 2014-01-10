function Controller() {
    function __alloyId15(e) {
        if (e && e.fromAdapter) return;
        __alloyId15.opts || {};
        var models = __alloyId14.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = cleanData(__alloyId11);
            var __alloyId13 = Alloy.createController("newsrow", {
                $model: __alloyId11,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId13.getViewEx({
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
    $.__views.newsWindow = Ti.UI.createWindow({
        fullscreen: true,
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
    var __alloyId14 = Alloy.Collections["news"] || news;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    var decoder = require("entitydecoder");
    $.table.addEventListener("click", function(e) {
        var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON();
        var newsDetailWin = Alloy.createController("newsdetail", modelData).getView();
        Alloy.Globals.navWindow ? Alloy.Globals.navWindow.openWindow(newsDetailWin, {
            animated: true
        }) : newsDetailWin.open({
            animated: true
        });
    });
    Alloy.Collections.news.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;