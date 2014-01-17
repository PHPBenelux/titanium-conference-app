function Controller() {
    function openDetail() {
        var scheduleDetailWin = Alloy.createController("scheduledetail", args).getView();
        Alloy.Globals.navWindow ? Alloy.Globals.navWindow.openWindow(scheduleDetailWin, {
            animated: true
        }) : scheduleDetailWin.open({
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
    $.__views.scheduleRow = Ti.UI.createTableViewRow({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        hasChild: true,
        id: "scheduleRow"
    });
    $.__views.scheduleRow && $.addTopLevelView($.__views.scheduleRow);
    openDetail ? $.__views.scheduleRow.addEventListener("click", openDetail) : __defers["$.__views.scheduleRow!click!openDetail"] = true;
    $.__views.__alloyId59 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: 100,
        layout: "composite",
        id: "__alloyId59"
    });
    $.__views.scheduleRow.add($.__views.__alloyId59);
    $.__views.roomLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333333",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "roomLabel"
    });
    $.__views.__alloyId59.add($.__views.roomLabel);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: 160,
        layout: "vertical",
        id: "__alloyId60"
    });
    $.__views.scheduleRow.add($.__views.__alloyId60);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        left: 10,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        id: "titleLabel"
    });
    $.__views.__alloyId60.add($.__views.titleLabel);
    $.__views.speakerLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 10,
        font: {
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "speakerLabel"
    });
    $.__views.__alloyId60.add($.__views.speakerLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.roomLabel.text = args.room;
    $.titleLabel.text = args.title;
    $.speakerLabel.text = args.speaker;
    __defers["$.__views.scheduleRow!click!openDetail"] && $.__views.scheduleRow.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;