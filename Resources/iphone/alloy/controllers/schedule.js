function Controller() {
    function openDetail(e) {
        alert("row index = " + JSON.stringify(e.index));
        var scheduleDetailWin = Alloy.createController("scheduledetail").getView();
        scheduleDetailWin.open();
    }
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
    openDetail ? $.__views.table.addEventListener("click", openDetail) : __defers["$.__views.table!click!openDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;