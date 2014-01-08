function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.scheduleWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "scheduleWindow",
        title: "Schedule"
    });
    $.__views.scheduleWindow && $.addTopLevelView($.__views.scheduleWindow);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.scheduleWindow.add($.__views.table);
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
    httpClient.open("GET", Alloy.CFG.apiUrl + "phpbenelux/schedule");
    httpClient.send();
    httpClient.onload = function() {
        var json = JSON.parse(this.responseText);
        0 == json.length && ($.table.headerTitle = "No data");
        var schedule = json.posts;
        for (var i = 0, iLen = schedule.length; iLen > i; i++) data.push(Alloy.createController("schedulerow", {
            title: schedule[i].title,
            content: schedule[i].content,
            startDate: schedule[i].timestamp_start,
            endDate: schedule[i].timestamp_end
        }).getView());
        $.table.setData(data);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;