function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scheduledetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.scheduleDetailWindow = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "scheduleDetailWindow",
        title: "Schedule item"
    });
    $.__views.scheduleDetailWindow && $.addTopLevelView($.__views.scheduleDetailWindow);
    $.__views.__alloyId56 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical",
        contentWidth: "100%",
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        id: "__alloyId56"
    });
    $.__views.scheduleDetailWindow.add($.__views.__alloyId56);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        text: "Title",
        id: "titleLabel"
    });
    $.__views.__alloyId56.add($.__views.titleLabel);
    $.__views.descriptionLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        id: "descriptionLabel"
    });
    $.__views.__alloyId56.add($.__views.descriptionLabel);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        text: "Speaker",
        id: "nameLabel"
    });
    $.__views.__alloyId56.add($.__views.nameLabel);
    $.__views.pictureView = Ti.UI.createImageView({
        borderRadius: 5,
        id: "pictureView"
    });
    $.__views.__alloyId56.add($.__views.pictureView);
    $.__views.bioLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        id: "bioLabel"
    });
    $.__views.__alloyId56.add($.__views.bioLabel);
    $.__views.__alloyId57 = Ti.UI.createView({
        top: 5,
        height: Ti.UI.SIZE,
        width: 200,
        layout: "vertical",
        backgroundColor: "#ADC2FF",
        borderColor: "#232733",
        borderWidth: 2,
        borderRadius: 3,
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: 10,
        top: 5,
        bottom: 5,
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Date / Time:",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.dateLabel = Ti.UI.createLabel({
        width: 150,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Date / Time",
        id: "dateLabel"
    });
    $.__views.__alloyId58.add($.__views.dateLabel);
    $.__views.__alloyId60 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: 10,
        top: 5,
        bottom: 5,
        id: "__alloyId60"
    });
    $.__views.__alloyId57.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Room:",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.roomLabel = Ti.UI.createLabel({
        width: 150,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Room",
        id: "roomLabel"
    });
    $.__views.__alloyId60.add($.__views.roomLabel);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: 10,
        top: 5,
        bottom: 5,
        id: "__alloyId62"
    });
    $.__views.__alloyId57.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Level:",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.levelLabel = Ti.UI.createLabel({
        width: 150,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Level",
        id: "levelLabel"
    });
    $.__views.__alloyId62.add($.__views.levelLabel);
    $.__views.__alloyId64 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: 10,
        top: 5,
        bottom: 5,
        id: "__alloyId64"
    });
    $.__views.__alloyId57.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        width: 100,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "Session Type:",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.typeLabel = Ti.UI.createLabel({
        width: 150,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        text: "Session type",
        id: "typeLabel"
    });
    $.__views.__alloyId64.add($.__views.typeLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    imagecache = require("imagecache");
    imagecache.cachedImageView("speakerimages", args.picture, $.pictureView);
    $.titleLabel.text = args.title;
    $.descriptionLabel.text = args.content;
    $.nameLabel.text = args.speaker;
    $.bioLabel.text = args.bio;
    $.dateLabel.text = moment(args.startDate).format("DD MMM HH:mm") + " - " + moment(args.startDate).format("HH:mm");
    $.roomLabel.text = args.room;
    $.levelLabel.text = args.level;
    $.typeLabel.text = args.type;
    Ti.App.fireEvent("setMainTitle", {
        title: "Schedule"
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;