function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "blue",
        id: "menuView"
    });
    $.__views.menuView && $.addTopLevelView($.__views.menuView);
    var __alloyId46 = [];
    $.__views.schedule = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "schedule"
    });
    __alloyId46.push($.__views.schedule);
    $.__views.rowContainer = Ti.UI.createView({
        height: "30dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.schedule.add($.__views.rowContainer);
    $.__views.rowGear = Ti.UI.createView({
        left: 5,
        top: 7,
        width: "20dp",
        height: "20dp",
        backgroundImage: "/19-gear.png",
        id: "rowGear"
    });
    $.__views.rowContainer.add($.__views.rowGear);
    $.__views.rowLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "20dp",
        color: "#000",
        top: 7,
        left: 10,
        font: {
            fontSize: "15dp"
        },
        text: "Schedule",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.news = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "news"
    });
    __alloyId46.push($.__views.news);
    $.__views.rowContainer = Ti.UI.createView({
        height: "30dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.news.add($.__views.rowContainer);
    $.__views.rowSkull = Ti.UI.createView({
        left: 5,
        top: 7,
        width: "20dp",
        height: "20dp",
        backgroundImage: "/21-skull.png",
        id: "rowSkull"
    });
    $.__views.rowContainer.add($.__views.rowSkull);
    $.__views.rowLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "20dp",
        color: "#000",
        top: 7,
        left: 10,
        font: {
            fontSize: "15dp"
        },
        text: "News",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.about = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "about"
    });
    __alloyId46.push($.__views.about);
    $.__views.rowContainer = Ti.UI.createView({
        height: "30dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.about.add($.__views.rowContainer);
    $.__views.rowPicFrame = Ti.UI.createView({
        left: 5,
        top: 7,
        width: "20dp",
        height: "20dp",
        backgroundImage: "/41-picture-frame.png",
        id: "rowPicFrame"
    });
    $.__views.rowContainer.add($.__views.rowPicFrame);
    $.__views.rowLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "20dp",
        color: "#000",
        top: 7,
        left: 10,
        font: {
            fontSize: "15dp"
        },
        text: "About",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.menuTable = Ti.UI.createTableView({
        separatorStyle: "NONE",
        separatorColor: "transparent",
        backgroundColor: "#F2F2F2",
        data: __alloyId46,
        id: "menuTable"
    });
    $.__views.menuView.add($.__views.menuTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;