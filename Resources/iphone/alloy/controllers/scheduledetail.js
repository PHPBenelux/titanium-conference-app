function Controller() {
    function closeWindow() {
        $.scheduleDetailWindow.closeWindow();
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
    $.__views.scheduleDetailWindow.add($.__views.__alloyId11);
    $.__views.__alloyId14 = Ti.UI.createScrollView({
        id: "__alloyId14"
    });
    $.__views.scheduleDetailWindow.add($.__views.__alloyId14);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "Title",
        id: "titleLabel"
    });
    $.__views.__alloyId14.add($.__views.titleLabel);
    $.__views.descriptionLabel = Ti.UI.createWebView({
        fontSize: 10,
        id: "descriptionLabel"
    });
    $.__views.__alloyId14.add($.__views.descriptionLabel);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "Speaker",
        id: "nameLabel"
    });
    $.__views.__alloyId14.add($.__views.nameLabel);
    $.__views.pictureView = Ti.UI.createImageView({
        id: "pictureView"
    });
    $.__views.__alloyId14.add($.__views.pictureView);
    $.__views.bioLabel = Ti.UI.createWebView({
        fontSize: 10,
        id: "bioLabel"
    });
    $.__views.__alloyId14.add($.__views.bioLabel);
    $.__views.__alloyId15 = Ti.UI.createView({
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.dateLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Date / Time",
        id: "dateLabel"
    });
    $.__views.__alloyId15.add($.__views.dateLabel);
    $.__views.roomLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Room",
        id: "roomLabel"
    });
    $.__views.__alloyId15.add($.__views.roomLabel);
    $.__views.levelLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Level",
        id: "levelLabel"
    });
    $.__views.__alloyId15.add($.__views.levelLabel);
    $.__views.typeLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 8,
        text: "Session type",
        id: "typeLabel"
    });
    $.__views.__alloyId15.add($.__views.typeLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.titleLabel.text = "Title";
    $.descriptionLabel.html = "Description";
    $.nameLabel.text = "Speaker name";
    $.pictureView.image = "";
    $.bioLabel.html = "Speaker bio";
    $.dateLabel.text = "start - end";
    $.roomLabel.text = "room name";
    $.levelLabel.text = "level";
    $.typeLabel.text = "type";
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;