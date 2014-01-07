function Controller() {
    function closeWindow() {
        $.aboutWindow.close();
    }
    function loadAbout() {
        var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);
        httpClient.open("GET", "http://conference.phpbenelux.eu/2014/api/get_page/?slug=about");
        httpClient.send();
        httpClient.onload = function() {
            var json = JSON.parse(this.responseText);
            0 == json.length && ($.aboutLabel.text = "Text could not be updated");
            $.aboutLabel.text = json.page.content;
        };
    }
    function loadSponsors() {
        var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);
        httpClient.open("GET", "http://conference.phpbenelux.eu/2014/api/phpbenelux/sponsors");
        httpClient.send();
        httpClient.onload = function() {
            var json = JSON.parse(this.responseText);
            if (0 == json.length) {
                noDataLbl = Ti.UI.createLabel({
                    text: "No sponsor data available"
                });
                $.sponsorsView.add(noDataLbl);
            }
            var sponsors = json.posts;
            for (var i = 0, iLen = sponsors.length; iLen > i; i++) var sponsorBlock = Alloy.createController("sponsorblock", {
                name: sponsors[i].post_title,
                logo: sponsors[i].logo
            }).getView();
            $.sponsorsView.add(sponsorBlock);
        };
    }
    function loadCrew() {
        var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);
        httpClient.open("GET", "http://conference.phpbenelux.eu/2014/api/phpbenelux/crew");
        httpClient.send();
        httpClient.onload = function() {
            var json = JSON.parse(this.responseText);
            if (0 == json.length) {
                noDataLbl = Ti.UI.createLabel({
                    text: "No crew data available"
                });
                $.crewView.add(noDataLbl);
            }
            var crew = json.posts;
            for (var i = 0, iLen = crew.length; iLen > i; i++) var crewBlock = Alloy.createController("crewblock", {
                name: crew[i].post_title,
                content: crew[i].post_content,
                picture: crew[i].picture
            }).getView();
            $.crewView.add(crewBlock);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.aboutWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "aboutWindow",
        title: "About"
    });
    $.__views.aboutWindow && $.addTopLevelView($.__views.aboutWindow);
    var __alloyId2 = [];
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        title: "Back",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId2.push($.__views.backButton);
    closeWindow ? $.__views.backButton.addEventListener("click", closeWindow) : __defers["$.__views.backButton!click!closeWindow"] = true;
    $.__views.__alloyId0 = Ti.UI.iOS.createToolbar({
        items: __alloyId2,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId0"
    });
    $.__views.aboutWindow.add($.__views.__alloyId0);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "About the Conference",
        id: "__alloyId3"
    });
    $.__views.aboutWindow.add($.__views.__alloyId3);
    $.__views.aboutLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 10,
        id: "aboutLabel"
    });
    $.__views.aboutWindow.add($.__views.aboutLabel);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "Sponsors",
        id: "__alloyId4"
    });
    $.__views.aboutWindow.add($.__views.__alloyId4);
    $.__views.sponsorsView = Ti.UI.createView({
        id: "sponsorsView",
        layout: "vertical"
    });
    $.__views.aboutWindow.add($.__views.sponsorsView);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "Crew",
        id: "__alloyId5"
    });
    $.__views.aboutWindow.add($.__views.__alloyId5);
    $.__views.crewView = Ti.UI.createView({
        id: "crewView",
        layout: "vertical"
    });
    $.__views.aboutWindow.add($.__views.crewView);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 12,
        fontWeight: "bold",
        text: "About the app",
        id: "__alloyId6"
    });
    $.__views.aboutWindow.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        fontSize: 10,
        text: "This app has been created by Martin de Keijzer",
        id: "__alloyId7"
    });
    $.__views.aboutWindow.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var httpClientDefaults = {
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("Unable to retrieve the data");
        }
    };
    loadAbout();
    loadCrew();
    loadSponsors();
    __defers["$.__views.backButton!click!closeWindow"] && $.__views.backButton.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;