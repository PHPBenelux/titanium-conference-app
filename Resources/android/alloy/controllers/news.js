function Controller() {
    function closeWindow() {
        $.newsWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "news";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
            Ti.API.info(news[i].title);
            Ti.API.info(news[i].content);
            Ti.API.info(news[i].modified);
            data.push(Alloy.createController("newsrow", {
                title: news[i].title,
                content: news[i].content,
                postDate: news[i].modified
            }).getView());
        }
        $.table.setData(data);
    };
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;