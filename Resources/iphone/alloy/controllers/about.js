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
        loader.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("sponsor");
    $.__views.aboutWindow = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
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
        text: "About the Conference",
        id: "__alloyId2"
    });
    $.__views.aboutScroll.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "PHPBenelux is a non-profit usergroup for PHP developers in the Benelux and surrounding area. We organise monthly user group meetings, theme events and an annual conference.",
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
        text: "The conference and tutorials will take place at Hotel Ter Elst in Antwerp (Belgium). Friday morning January 24th we have a set of tutorials. The conference is spread over 2 days: Friday afternoon (after the tutorials) and Saturday. Tutorials as well as the conference itself are spread over several parallel tracks.",
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
        text: "On Friday and saturday evening, we’re having the conference social. This will include drinks and all the cool side activities.",
        id: "__alloyId5"
    });
    $.__views.aboutScroll.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
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
        id: "__alloyId6"
    });
    $.__views.aboutScroll.add($.__views.__alloyId6);
    $.__views.sponsorsView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "sponsorsView"
    });
    $.__views.aboutScroll.add($.__views.sponsorsView);
    $.__views.__alloyId7 = Ti.UI.createLabel({
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
        id: "__alloyId7"
    });
    $.__views.aboutScroll.add($.__views.__alloyId7);
    $.__views.crewView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "crewView"
    });
    $.__views.aboutScroll.add($.__views.crewView);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId8"
    });
    $.__views.crewView.add($.__views.__alloyId8);
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
        text: "Jeroen van Dijk",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        borderRadius: 5,
        image: "/images/jeroen.jpg",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Jeroen van Dijk is a technical consultant and evangelist at Enrise, Open Source enthusiast and as board member also devotes his time to PHPBenelux. He has extensive knowledge of scaling applications using Zend Server, Solr and Varnish. Occasionally you can read a blogpost or two at http://jrdk.nl",
        id: "__alloyId11"
    });
    $.__views.__alloyId8.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId12"
    });
    $.__views.crewView.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
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
        text: "Leon Luijkx",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Leon Luijkx is a consultant specialised in improving business processes. Most of the time he deals with automation of processes and manual work at telecom companies. He likes to set up financial administrations for small businesses and assocations. Leon is also staff member of PHPBenelux.",
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId15"
    });
    $.__views.crewView.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
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
        text: "Martin de Keijzer",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        borderRadius: 5,
        image: "/images/martin.jpg",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Martin is familiar with both the front-end and server side techniques. About 10 years ago he started out with this funny little language called PHP, which became his gateway into the world of programming and for many solutions he still uses a lot of PHP and has a lot of love for the language. Also by being an active crew member for PHPBenelux and by speaking at conferences around the world. Next to PHP Martin also has big interest for the mobile web and Javascript on both the server- and client-side. He maintains a blog at www.martindekeijzer.nl",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.crewView.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
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
        text: "Michelangelo van Dam",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        borderRadius: 5,
        image: "/images/michelangelo.jpg",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Michelangelo van Dam is a professional PHP consultant and Zend Framework expert working mainly for governments and larger enterprises providing consulting services and offer training courses. Michelangelo is also staff member of PHPBenelux, a PHP user group operating in Belgium, Netherlands and Luxembourg, a respected member of the international PHP community and speaks at several PHP conferences around the world.",
        id: "__alloyId22"
    });
    $.__views.__alloyId19.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId23"
    });
    $.__views.crewView.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
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
        text: "Paul Borgermans",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        borderRadius: 5,
        image: "/images/paul.jpg",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Paul is a professional consultant on Apache Solr, Semantic technologies, PHP (Symfony) and the eZ Publish CMS. Besides being a regular staff member, he is also the overall coordinator for the PHPBenelux conferences.",
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.crewView.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
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
        text: "Richard Tuin",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        borderRadius: 5,
        image: "/images/richard.jpg",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Richard Tuin is a software developer working at Enrise, specialising in web technologies. He has a passion for PHP, quality assurance, the PHP community and music production. He is a PHPBenelux crew member since 2013, and also otherwise involved in the PHP community, and blogs at www.rtuin.nl.",
        id: "__alloyId30"
    });
    $.__views.__alloyId27.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId31"
    });
    $.__views.crewView.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
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
        text: "Thijs Feryn",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createImageView({
        borderRadius: 5,
        image: "/images/thijs.jpg",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "Thijs is a tech evangelist at Combell, the #1 Belgian web hosting company. As an evangelist he supports communities and has a particular love for the PHP community. Thijs loves public speaking and is a regular speaker at conferences worldwide. Check out his talks page at http://talks.feryn.eu. You can also find him on Twitter at @ThijsFeryn. Within the PHPBenelux user group Thijs is responsible for sponsoring and organizing ludicrous parties. Thijs also organizes most Belgian PHPBenelux meetups.",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
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
        id: "__alloyId35"
    });
    $.__views.aboutScroll.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 12
        },
        text: "This app has been created by Martin de Keijzer, and is open sourced on http://github.com/PHPBenelux/titanium-conference-app",
        id: "__alloyId36"
    });
    $.__views.aboutScroll.add($.__views.__alloyId36);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var overlay = require("overlayHUD");
    var loader = overlay.load();
    loader.show();
    Ti.App.fireEvent("setMainTitle", {
        title: "About"
    });
    Alloy.Collections.sponsor.fetch({
        success: loadSponsors,
        error: loader.hide
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;