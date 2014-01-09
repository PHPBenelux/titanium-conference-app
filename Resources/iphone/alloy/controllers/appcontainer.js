function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "appcontainer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.appcontainer = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "PHPBenelux Conference 2014",
        id: "appcontainer"
    });
    $.__views.appcontainer && $.addTopLevelView($.__views.appcontainer);
    $.__views.indexView = Ti.UI.createView({
        id: "indexView"
    });
    $.__views.appcontainer.add($.__views.indexView);
    $.__views.logoImage = Ti.UI.createImageView({
        id: "logoImage",
        image: "/images/phpbenelux_conference_logo-2014.png"
    });
    $.__views.indexView.add($.__views.logoImage);
    $.__views.__alloyId5 = Ti.UI.createView({
        id: "__alloyId5"
    });
    $.__views.indexView.add($.__views.__alloyId5);
    $.__views.news = Ti.UI.createButton({
        title: "News",
        id: "news"
    });
    $.__views.__alloyId5.add($.__views.news);
    openNews ? $.__views.news.addEventListener("click", openNews) : __defers["$.__views.news!click!openNews"] = true;
    $.__views.schedule = Ti.UI.createButton({
        title: "Schedule",
        id: "schedule"
    });
    $.__views.__alloyId5.add($.__views.schedule);
    openSchedule ? $.__views.schedule.addEventListener("click", openSchedule) : __defers["$.__views.schedule!click!openSchedule"] = true;
    $.__views.about = Ti.UI.createButton({
        title: "About",
        id: "about"
    });
    $.__views.__alloyId5.add($.__views.about);
    openAbout ? $.__views.about.addEventListener("click", openAbout) : __defers["$.__views.about!click!openAbout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.news!click!openNews"] && $.__views.news.addEventListener("click", openNews);
    __defers["$.__views.schedule!click!openSchedule"] && $.__views.schedule.addEventListener("click", openSchedule);
    __defers["$.__views.about!click!openAbout"] && $.__views.about.addEventListener("click", openAbout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;