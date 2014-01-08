function Controller() {
    function openNews() {
        var newsWin = Alloy.createController("news").getView();
        $.navWindow.openWindow(newsWin, {
            animated: true
        });
    }
    function openSchedule() {
        var scheduleWin = Alloy.createController("schedule").getView();
        $.navWindow.openWindow(scheduleWin, {
            animated: true
        });
    }
    function openAbout() {
        var aboutWin = Alloy.createController("about").getView();
        $.navWindow.openWindow(aboutWin, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId6 = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "PHPBenelux Conference 2014",
        id: "__alloyId6"
    });
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.logoImage = Ti.UI.createImageView({
        top: 10,
        id: "logoImage",
        image: "http://conference.phpbenelux.eu/2014/wp-content/uploads/2013/08/phpbenelux_conference_logo-2014-e1377030913837.png"
    });
    $.__views.__alloyId7.add($.__views.logoImage);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.news = Ti.UI.createButton({
        left: 30,
        title: "News",
        id: "news"
    });
    $.__views.__alloyId8.add($.__views.news);
    openNews ? $.__views.news.addEventListener("click", openNews) : __defers["$.__views.news!click!openNews"] = true;
    $.__views.schedule = Ti.UI.createButton({
        title: "Schedule",
        id: "schedule"
    });
    $.__views.__alloyId8.add($.__views.schedule);
    openSchedule ? $.__views.schedule.addEventListener("click", openSchedule) : __defers["$.__views.schedule!click!openSchedule"] = true;
    $.__views.about = Ti.UI.createButton({
        right: 30,
        title: "About",
        id: "about"
    });
    $.__views.__alloyId8.add($.__views.about);
    openAbout ? $.__views.about.addEventListener("click", openAbout) : __defers["$.__views.about!click!openAbout"] = true;
    $.__views.navWindow = Ti.UI.iOS.createNavigationWindow({
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        window: $.__views.__alloyId6,
        id: "navWindow"
    });
    $.__views.navWindow && $.addTopLevelView($.__views.navWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.navWindow.open();
    Alloy.Globals.navWindow = $.navWindow;
    __defers["$.__views.news!click!openNews"] && $.__views.news.addEventListener("click", openNews);
    __defers["$.__views.schedule!click!openSchedule"] && $.__views.schedule.addEventListener("click", openSchedule);
    __defers["$.__views.about!click!openAbout"] && $.__views.about.addEventListener("click", openAbout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;