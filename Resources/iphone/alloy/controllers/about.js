function Controller() {
    function loadAbout() {
        var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);
        httpClient.open("GET", Alloy.CFG.apiUrl + "get_page/?slug=about");
        httpClient.send();
        httpClient.onload = function() {
            var json = JSON.parse(this.responseText);
            0 == json.length && ($.aboutLabel.html = Alloy.CFG.htmlPrepend + "Text could not be updated" + Alloy.CFG.htmlSuffix);
            $.aboutLabel.html = Alloy.CFG.htmlPrepend + json.page.content + Alloy.CFG.htmlSuffix;
        };
    }
    function loadSponsors() {
        var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);
        httpClient.open("GET", Alloy.CFG.apiUrl + "phpbenelux/sponsors");
        httpClient.send();
        httpClient.onload = function() {
            var json = JSON.parse(this.responseText);
            if (0 == json.length) {
                noDataLbl = Ti.UI.createLabel({
                    text: "No sponsor data available",
                    height: Ti.UI.Size
                });
                $.sponsorsView.add(noDataLbl);
            }
            var sponsors = json.posts;
            for (var i = 0, iLen = sponsors.length; iLen > i; i++) {
                var sponsorBlock = Alloy.createController("sponsorblock", {
                    name: sponsors[i].post_title,
                    logo: sponsors[i].logo
                }).getView();
                $.sponsorsView.add(sponsorBlock);
            }
        };
    }
    function loadCrew() {
        var httpClient = Ti.Network.createHTTPClient(httpClientDefaults);
        httpClient.open("GET", Alloy.CFG.apiUrl + "phpbenelux/crew");
        httpClient.send();
        httpClient.onload = function() {
            var json = JSON.parse(this.responseText);
            if (0 == json.length) {
                noDataLbl = Ti.UI.createLabel({
                    text: "No crew data available",
                    height: Ti.UI.Size
                });
                $.crewView.add(noDataLbl);
            }
            var crew = json.posts;
            for (var i = 0, iLen = crew.length; iLen > i; i++) {
                var crewBlock = Alloy.createController("crewblock", {
                    name: crew[i].post_title,
                    content: crew[i].post_content,
                    picture: crew[i].picture
                }).getView();
                $.crewView.add(crewBlock);
            }
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.aboutWindow = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "aboutWindow",
        title: "About"
    });
    $.__views.aboutWindow && $.addTopLevelView($.__views.aboutWindow);
    $.__views.aboutScroll = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "vertical",
        showVerticalScrollIndicator: true,
        scrollType: "vertical",
        contentWidth: "100%",
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        id: "aboutScroll"
    });
    $.__views.aboutWindow.add($.__views.aboutScroll);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        text: "About the Conference",
        id: "__alloyId0"
    });
    $.__views.aboutScroll.add($.__views.__alloyId0);
    $.__views.aboutLabel = Ti.UI.createWebView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        id: "aboutLabel"
    });
    $.__views.aboutScroll.add($.__views.aboutLabel);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        text: "Sponsors",
        id: "__alloyId1"
    });
    $.__views.aboutScroll.add($.__views.__alloyId1);
    $.__views.sponsorsView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "sponsorsView"
    });
    $.__views.aboutScroll.add($.__views.sponsorsView);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        text: "Crew",
        id: "__alloyId2"
    });
    $.__views.aboutScroll.add($.__views.__alloyId2);
    $.__views.crewView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "crewView"
    });
    $.__views.aboutScroll.add($.__views.crewView);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#469AE7",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold"
        },
        top: 5,
        bottom: 5,
        text: "About the app",
        id: "__alloyId3"
    });
    $.__views.aboutScroll.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "This app has been created by Martin de Keijzer",
        id: "__alloyId4"
    });
    $.__views.aboutScroll.add($.__views.__alloyId4);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;