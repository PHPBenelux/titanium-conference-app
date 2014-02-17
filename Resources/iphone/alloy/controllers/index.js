function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        navBarHidden: true,
        exitOnClose: true,
        layout: "vertical",
        fullscreen: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId39 = [];
    $.__views.__alloyId40 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId39.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        text: "Home",
        id: "__alloyId41"
    });
    __alloyId39.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId39.push($.__views.__alloyId42);
    $.__views.menuBtn = Ti.UI.createButton({
        id: "menuBtn",
        title: "Menu"
    });
    __alloyId39.push($.__views.menuBtn);
    $.__views.__alloyId37 = Ti.UI.iOS.createToolbar({
        items: __alloyId39,
        top: "0",
        id: "__alloyId37"
    });
    $.__views.index.add($.__views.__alloyId37);
    $.__views.__alloyId43 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId43"
    });
    $.__views.index.add($.__views.__alloyId43);
    $.__views.drawermenu = Alloy.createWidget("com.drawermenu.widget", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.__alloyId43
    });
    $.__views.drawermenu.setParent($.__views.__alloyId43);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var controls = require("controls");
    var menuView = controls.getMenuView();
    menuView.menuTable.addEventListener("click", function(e) {
        $.drawermenu.showhidemenu();
        var drawerView = Alloy.createController(e.rowData.id).getView();
        mainView.contentView.add(drawerView);
    });
    var mainView = controls.getMainView();
    Alloy.Globals.mainView = mainView;
    $.drawermenu.drawermenuview.add(menuView.getView());
    $.menuBtn.addEventListener("click", $.drawermenu.showhidemenu);
    $.drawermenu.drawermainview.add(mainView.getView());
    $.index.open();
    Ti.App.addEventListener("openLink", function(e) {
        Ti.Platform.openURL(e.link);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;