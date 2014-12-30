function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
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
    var __alloyId36 = [];
    $.__views.menuBtn = Ti.UI.createButton({
        id: "menuBtn",
        title: "Menu"
    });
    __alloyId36.push($.__views.menuBtn);
    $.__views.__alloyId37 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId36.push($.__views.__alloyId37);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "titleLabel",
        text: "Home"
    });
    __alloyId36.push($.__views.titleLabel);
    $.__views.__alloyId38 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId36.push($.__views.__alloyId38);
    $.__views.__alloyId34 = Ti.UI.iOS.createToolbar({
        items: __alloyId36,
        top: "0",
        id: "__alloyId34"
    });
    $.__views.index.add($.__views.__alloyId34);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId39"
    });
    $.__views.index.add($.__views.__alloyId39);
    $.__views.drawermenu = Alloy.createWidget("com.drawermenu.widget", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.__alloyId39
    });
    $.__views.drawermenu.setParent($.__views.__alloyId39);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var controls = require("controls"), menuView = controls.getMenuView();
    "android" === Ti.Platform.osname ? Ti.App.addEventListener("setMainTitle", function(e) {
        $.index.activity.actionBar && ($.index.activity.actionBar.title = e.title);
    }) : Ti.App.addEventListener("setMainTitle", function(e) {
        $.titleLabel && ($.titleLabel.text = e.title);
    });
    $.index.addEventListener("open", function() {
        "android" === Ti.Platform.osname && ($.index.activity ? $.index.activity.actionBar && ($.index.activity.actionBar.onHomeIconItemSelected = $.drawermenu.showhidemenu) : Ti.API.error("Can't access action bar on a lightweight window."));
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