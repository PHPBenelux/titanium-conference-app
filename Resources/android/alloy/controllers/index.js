function Controller() {
    function __alloyId43() {
        $.__views.index.removeEventListener("open", __alloyId43);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId42 = {
                id: "menuBtn",
                title: "Menu",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            };
            $.__views.menuBtn = e.menu.add(_.pick(__alloyId42, Alloy.Android.menuItemCreateArgs));
            $.__views.menuBtn.applyProperties(_.omit(__alloyId42, Alloy.Android.menuItemCreateArgs));
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        navBarHidden: "false",
        exitOnClose: true,
        fullscreen: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.index.addEventListener("open", __alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId44"
    });
    $.__views.index.add($.__views.__alloyId44);
    $.__views.drawermenu = Alloy.createWidget("com.drawermenu.widget", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.__alloyId44
    });
    $.__views.drawermenu.setParent($.__views.__alloyId44);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var controls = require("controls"), menuView = controls.getMenuView();
    Ti.App.addEventListener("setMainTitle", function(e) {
        $.index.activity.actionBar && ($.index.activity.actionBar.title = e.title);
    });
    $.index.addEventListener("open", function() {
        $.index.activity ? $.index.activity.actionBar && ($.index.activity.actionBar.onHomeIconItemSelected = $.drawermenu.showhidemenu) : Ti.API.error("Can't access action bar on a lightweight window.");
    });
    menuView.menuTable.addEventListener("click", function(e) {
        $.drawermenu.showhidemenu();
        var drawerView = Alloy.createController(e.rowData.id).getView();
        Alloy.Globals.mainView.contentView.add(drawerView);
    });
    Alloy.Globals.mainView = controls.getMainView();
    $.drawermenu.drawermenuview.add(menuView.getView());
    $.menuBtn && $.menuBtn.addEventListener("click", $.drawermenu.showhidemenu);
    $.drawermenu.drawermainview.add(Alloy.Globals.mainView.getView());
    $.index.open();
    Ti.App.addEventListener("openLink", function(e) {
        Ti.Platform.openURL(e.link);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;