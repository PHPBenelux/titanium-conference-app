function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function sortObj(arr) {
        var sortedKeys = new Array();
        var sortedObj = {};
        for (var i in arr) sortedKeys.push(i);
        sortedKeys.sort();
        for (var i in sortedKeys) sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
        return sortedObj;
    }
    function loadSchedule(collection) {
        var schedule = collection.toJSON();
        Ti.API.info(JSON.stringify(schedule));
        if (0 == schedule.length) {
            $.table.headerTitle = "No schedule data";
            return true;
        }
        var sectionSchedule = [];
        var sections = [];
        for (var i = 0, iLen = schedule.length; iLen > i; i++) {
            session = schedule[i];
            var timestampKey = session.startDate;
            sectionSchedule[timestampKey] || (sectionSchedule[timestampKey] = []);
            sectionSchedule[timestampKey].push(Alloy.createController("schedulerow", {
                title: decoder.decode(session.title),
                content: session.content,
                speaker: session.speaker,
                bio: session.bio,
                picture: session.picture,
                startDate: session.startDate,
                endDate: session.endDate,
                room: session.room
            }).getView());
        }
        sectionSchedule = sortObj(sectionSchedule);
        for (var jIndex in sectionSchedule) {
            var currentSection = sectionSchedule[jIndex];
            var sectionHeader = Ti.UI.createTableViewSection({
                headerTitle: moment(jIndex.toString(), "X").format("DD MMM HH:mm")
            });
            for (var k = 0, kLen = currentSection.length; kLen > k; k++) sectionHeader.add(currentSection[k]);
            sections.push(sectionHeader);
        }
        $.table.setData(sections);
        hideActivity();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
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
    Alloy.Collections.instance("schedule");
    $.__views.scheduleWindow = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "scheduleWindow",
        title: "Schedule"
    });
    $.__views.scheduleWindow && $.addTopLevelView($.__views.scheduleWindow);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        color: "#E31837",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 16,
            fontWeight: "bold"
        },
        message: "Loading...",
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "activityIndicator"
    });
    $.__views.scheduleWindow.add($.__views.activityIndicator);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.scheduleWindow.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    var decoder = require("entitydecoder");
    var hideActivity = function() {
        $.scheduleWindow.remove($.activityIndicator);
    };
    var style;
    style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
    $.activityIndicator.setStyle(style);
    $.activityIndicator.show();
    Ti.App.fireEvent("setMainTitle", {
        title: "Schedule"
    });
    Alloy.Collections.schedule.fetch({
        success: loadSchedule,
        error: hideActivity
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;