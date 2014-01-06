function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedulerow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.schedulerow = Ti.UI.createTableViewRow({
        id: "schedulerow"
    });
    $.__views.schedulerow && $.addTopLevelView($.__views.schedulerow);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId24"
    });
    $.__views.schedulerow.add($.__views.__alloyId24);
    $.__views.startTimeLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "startTimeLabel"
    });
    $.__views.__alloyId24.add($.__views.startTimeLabel);
    $.__views.endTimeLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "endTimeLabel"
    });
    $.__views.__alloyId24.add($.__views.endTimeLabel);
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId25"
    });
    $.__views.schedulerow.add($.__views.__alloyId25);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "titleLabel"
    });
    $.__views.__alloyId25.add($.__views.titleLabel);
    $.__views.speakerLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "speakerLabel"
    });
    $.__views.__alloyId25.add($.__views.speakerLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;