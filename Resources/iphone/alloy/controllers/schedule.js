function Controller() {
    function closeWindow() {
        $.scheduleWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.scheduleWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "scheduleWindow",
        title: "schedule"
    });
    $.__views.scheduleWindow && $.addTopLevelView($.__views.scheduleWindow);
    var __alloyId19 = [];
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        title: "Back",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId19.push($.__views.backButton);
    closeWindow ? $.__views.backButton.addEventListener("click", closeWindow) : __defers["$.__views.backButton!click!closeWindow"] = true;
    $.__views.__alloyId17 = Ti.UI.iOS.createToolbar({
        items: __alloyId19,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId17"
    });
    $.__views.scheduleWindow.add($.__views.__alloyId17);
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
    httpClient.open("GET", "http://conference.phpbenelux.eu/2014/api/phpbenelux/schedule");
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
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;