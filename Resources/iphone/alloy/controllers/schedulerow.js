function Controller() {
    function openDetail() {
        var scheduleDetailWin = Alloy.createController("scheduledetail", args).getView();
        Alloy.Globals.navWindow.openWindow(scheduleDetailWin, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedulerow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.schedulerow = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "schedulerow"
    });
    $.__views.schedulerow && $.addTopLevelView($.__views.schedulerow);
    openDetail ? $.__views.schedulerow.addEventListener("click", openDetail) : __defers["$.__views.schedulerow!click!openDetail"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        id: "__alloyId12"
    });
    $.__views.schedulerow.add($.__views.__alloyId12);
    $.__views.startTimeLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "8dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "startTimeLabel"
    });
    $.__views.__alloyId12.add($.__views.startTimeLabel);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "8dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        text: "-",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.endTimeLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "8dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "endTimeLabel"
    });
    $.__views.__alloyId12.add($.__views.endTimeLabel);
    $.__views.__alloyId14 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 0,
        id: "__alloyId14"
    });
    $.__views.schedulerow.add($.__views.__alloyId14);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "12dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "titleLabel"
    });
    $.__views.__alloyId14.add($.__views.titleLabel);
    $.__views.speakerLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "10dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "speakerLabel"
    });
    $.__views.__alloyId14.add($.__views.speakerLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    var startDate = moment(args.startDate);
    moment(args.endDate);
    $.titleLabel.text = args.title;
    $.startTimeLabel.text = startDate.format("DD MMM, HH:mm");
    $.endTimeLabel.text = startDate.format("DD MMM, HH:mm");
    $.speakerLabel.text = "speaker";
    __defers["$.__views.schedulerow!click!openDetail"] && $.__views.schedulerow.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;