function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scheduledetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.scheduleDetailWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "scheduleDetailWindow",
        title: "Schedule item"
    });
    $.__views.scheduleDetailWindow && $.addTopLevelView($.__views.scheduleDetailWindow);
    $.__views.__alloyId10 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical",
        id: "__alloyId10"
    });
    $.__views.scheduleDetailWindow.add($.__views.__alloyId10);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        text: "Title",
        id: "titleLabel"
    });
    $.__views.__alloyId10.add($.__views.titleLabel);
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
    $.__views.__alloyId10.add($.__views.descriptionLabel);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        text: "Speaker",
        id: "nameLabel"
    });
    $.__views.__alloyId10.add($.__views.nameLabel);
    $.__views.pictureView = Ti.UI.createImageView({
        id: "pictureView"
    });
    $.__views.__alloyId10.add($.__views.pictureView);
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
    $.__views.__alloyId10.add($.__views.bioLabel);
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.dateLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Date / Time",
        id: "dateLabel"
    });
    $.__views.__alloyId11.add($.__views.dateLabel);
    $.__views.roomLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Room",
        id: "roomLabel"
    });
    $.__views.__alloyId11.add($.__views.roomLabel);
    $.__views.levelLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Level",
        id: "levelLabel"
    });
    $.__views.__alloyId11.add($.__views.levelLabel);
    $.__views.typeLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Session type",
        id: "typeLabel"
    });
    $.__views.__alloyId11.add($.__views.typeLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    $.titleLabel.text = args.title;
    $.descriptionLabel.html = args.content + Alloy.CFG.css;
    $.nameLabel.text = args.speaker;
    $.pictureView.image = args.picture;
    $.bioLabel.html = args.bio + Alloy.CFG.css;
    $.dateLabel.text = moment(args.startDate).format("DD MMM HH:mm") + " - " + moment(args.startDate).format("HH:mm");
    $.roomLabel.text = args.room;
    $.levelLabel.text = args.level;
    $.typeLabel.text = args.type;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;