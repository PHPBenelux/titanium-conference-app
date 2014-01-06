function Controller() {
    function closeWindow() {
        $.scheduleDetailWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scheduledetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.scheduleDetailWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "scheduleDetailWindow",
        title: "Schedule item"
    });
    $.__views.scheduleDetailWindow && $.addTopLevelView($.__views.scheduleDetailWindow);
    var __alloyId22 = [];
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        title: "Back",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId22.push($.__views.backButton);
    closeWindow ? $.__views.backButton.addEventListener("click", closeWindow) : __defers["$.__views.backButton!click!closeWindow"] = true;
    $.__views.__alloyId20 = Ti.UI.iOS.createToolbar({
        items: __alloyId22,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId20"
    });
    $.__views.scheduleDetailWindow.add($.__views.__alloyId20);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "Title",
        id: "titleLabel"
    });
    $.__views.scheduleDetailWindow.add($.__views.titleLabel);
    $.__views.descriptionLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 10,
        id: "descriptionLabel"
    });
    $.__views.scheduleDetailWindow.add($.__views.descriptionLabel);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "Speaker",
        id: "nameLabel"
    });
    $.__views.scheduleDetailWindow.add($.__views.nameLabel);
    $.__views.pictureView = Ti.UI.createImageView({
        id: "pictureView"
    });
    $.__views.scheduleDetailWindow.add($.__views.pictureView);
    $.__views.bioLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 10,
        id: "bioLabel"
    });
    $.__views.scheduleDetailWindow.add($.__views.bioLabel);
    $.__views.__alloyId23 = Ti.UI.createView({
        id: "__alloyId23"
    });
    $.__views.scheduleDetailWindow.add($.__views.__alloyId23);
    $.__views.dateLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Date / Time",
        id: "dateLabel"
    });
    $.__views.__alloyId23.add($.__views.dateLabel);
    $.__views.roomLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Room",
        id: "roomLabel"
    });
    $.__views.__alloyId23.add($.__views.roomLabel);
    $.__views.levelLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Level",
        id: "levelLabel"
    });
    $.__views.__alloyId23.add($.__views.levelLabel);
    $.__views.typeLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Session type",
        id: "typeLabel"
    });
    $.__views.__alloyId23.add($.__views.typeLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;