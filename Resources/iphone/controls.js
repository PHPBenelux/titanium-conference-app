var Alloy = require("alloy");

exports.getMainView = function() {
    return Alloy.createController("mainview");
};

exports.getMenuView = function() {
    var v = Alloy.createController("menuview");
    return v;
};

exports.getMenuButton = function() {
    var button = Titanium.UI.createButton({
        title: "Menu",
        top: 10,
        width: 100,
        height: 50
    });
    return button;
};