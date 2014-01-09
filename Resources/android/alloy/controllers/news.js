function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "news";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    Alloy.createCollection("news");
    var data = [];
    var httpClient = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("Unable to retrieve the data");
        }
    });
    httpClient.open("GET", Alloy.CFG.apiUrl + "get_recent_posts");
    httpClient.send();
    httpClient.onload = function() {
        var json = JSON.parse(this.responseText);
        0 == json.length && ($.table.headerTitle = "No data");
        var news = json.posts;
        for (var i = 0, iLen = news.length; iLen > i; i++) {
            var postDate = moment(news[i].date);
            data.push(Alloy.createController("newsrow", {
                title: news[i].title,
                content: news[i].content,
                postDate: postDate.format("DD MMM YYYY, HH:mm")
            }).getView());
        }
        $.table.setData(data);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;