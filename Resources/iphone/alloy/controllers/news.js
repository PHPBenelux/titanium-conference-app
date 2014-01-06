function Controller() {
    function openDetail(e) {
        alert("row index = " + JSON.stringify(e.index));
        var newsDetailWin = Alloy.createController("newsdetail").getView();
        newsDetailWin.open();
    }
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
    var __alloyId13 = [];
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        title: "Back",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId13.push($.__views.backButton);
    closeWindow ? $.__views.backButton.addEventListener("click", closeWindow) : __defers["$.__views.backButton!click!closeWindow"] = true;
    $.__views.__alloyId11 = Ti.UI.iOS.createToolbar({
        items: __alloyId13,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId11"
    });
    $.__views.newsWindow.add($.__views.__alloyId11);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.newsWindow.add($.__views.table);
    openDetail ? $.__views.table.addEventListener("click", openDetail) : __defers["$.__views.table!click!openDetail"] = true;
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
    httpClient.open("GET", "http://conference.phpbenelux.eu/2014/api/get_recent_posts");
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
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;