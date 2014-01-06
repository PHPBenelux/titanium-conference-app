function Controller() {
    function openNews() {}
    function openSchedule() {}
    function openAbout() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "PHPBenelux Conference 2014",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "http://conference.phpbenelux.eu/2014/wp-content/uploads/2013/08/phpbenelux_conference_logo-2014-e1377030913837.png",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.news = Ti.UI.createButton({
        title: "News",
        id: "news"
    });
    $.__views.__alloyId2.add($.__views.news);
    openNews ? $.__views.news.addEventListener("click", openNews) : __defers["$.__views.news!click!openNews"] = true;
    $.__views.schedule = Ti.UI.createButton({
        title: "Schedule",
        id: "schedule"
    });
    $.__views.__alloyId2.add($.__views.schedule);
    openSchedule ? $.__views.schedule.addEventListener("click", openSchedule) : __defers["$.__views.schedule!click!openSchedule"] = true;
    $.__views.about = Ti.UI.createButton({
        title: "About",
        id: "about"
    });
    $.__views.__alloyId2.add($.__views.about);
    openAbout ? $.__views.about.addEventListener("click", openAbout) : __defers["$.__views.about!click!openAbout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.news!click!openNews"] && $.__views.news.addEventListener("click", openNews);
    __defers["$.__views.schedule!click!openSchedule"] && $.__views.schedule.addEventListener("click", openSchedule);
    __defers["$.__views.about!click!openAbout"] && $.__views.about.addEventListener("click", openAbout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;