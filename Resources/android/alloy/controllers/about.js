function Controller() {
    function loadSponsors(collection) {
        var sponsors = collection.toJSON();
        for (var i = 0, iLen = sponsors.length; iLen > i; i++) {
            var sponsorBlock = Alloy.createController("sponsorblock", {
                name: sponsors[i].post_title,
                logo: sponsors[i].logo
            }).getView();
            $.sponsorsView.add(sponsorBlock);
        }
        setLoaderOverlay();
    }
    function loadCrew(collection) {
        var crew = collection.toJSON();
        for (var i = 0, iLen = crew.length; iLen > i; i++) {
            var crewBlock = Alloy.createController("crewblock", {
                name: crew[i].post_title,
                content: crew[i].post_content,
                picture: crew[i].picture
            }).getView();
            $.crewView.add(crewBlock);
        }
        setLoaderOverlay();
    }
    function setLoaderOverlay() {
        blocksLoaded++;
        2 == blocksLoaded && loader.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("sponsor");
    Alloy.Collections.instance("crew");
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
    $.__views.logoImage = Ti.UI.createImageView({
        borderRadius: 5,
        top: 5,
        left: 5,
        right: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "logoImage",
        image: "/images/phpbenelux_conference_logo-2014.png"
    });
    $.__views.aboutScroll.add($.__views.logoImage);
    $.__views.__alloyId4 = Ti.UI.createLabel({
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
        id: "__alloyId4"
    });
    $.__views.aboutScroll.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "PHPBenelux is a non-profit usergroup for PHP developers in the Benelux and surrounding area. We organise monthly user group meetings, theme events and an annual conference.",
        id: "__alloyId5"
    });
    $.__views.aboutScroll.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "The conference and tutorials will take place at Hotel Ter Elst in Antwerp (Belgium). Friday morning January 24th we have a set of tutorials. The conference is spread over 2 days: Friday afternoon (after the tutorials) and Saturday. Tutorials as well as the conference itself are spread over several parallel tracks.",
        id: "__alloyId6"
    });
    $.__views.aboutScroll.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "On Friday and saturday evening, we’re having the conference social. This will include drinks and all the cool side activities.",
        id: "__alloyId7"
    });
    $.__views.aboutScroll.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
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
        id: "__alloyId8"
    });
    $.__views.aboutScroll.add($.__views.__alloyId8);
    $.__views.sponsorsView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "sponsorsView"
    });
    $.__views.aboutScroll.add($.__views.sponsorsView);
    $.__views.__alloyId9 = Ti.UI.createLabel({
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
        id: "__alloyId9"
    });
    $.__views.aboutScroll.add($.__views.__alloyId9);
    $.__views.crewView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "crewView"
    });
    $.__views.aboutScroll.add($.__views.crewView);
    $.__views.__alloyId10 = Ti.UI.createLabel({
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
        id: "__alloyId10"
    });
    $.__views.aboutScroll.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "This app has been created by Martin de Keijzer, and is open sourced on http://github.com/PHPBenelux/titanium-conference-app",
        id: "__alloyId11"
    });
    $.__views.aboutScroll.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var overlay = require("overlayHUD");
    var blocksLoaded = 0;
    var loader = overlay.load();
    loader.show();
    Alloy.Collections.sponsor.fetch({
        success: loadSponsors,
        error: setLoaderOverlay
    });
    Alloy.Collections.crew.fetch({
        success: loadCrew,
        error: setLoaderOverlay
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;