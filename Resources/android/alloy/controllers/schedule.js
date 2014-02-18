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
        if (0 == schedule.length) {
            $.table.headerTitle = "No data";
            return true;
        }
        var sectionSchedule = [];
        var sections = [];
        for (var i = 0, iLen = schedule.length; iLen > i; i++) {
            var timestampKey = moment(schedule[i].startDate).format("X");
            sectionSchedule[timestampKey] || (sectionSchedule[timestampKey] = []);
            sectionSchedule[timestampKey].push(Alloy.createController("schedulerow", {
                title: decoder.decode(schedule[i].title),
                content: schedule[i].content,
                speaker: schedule[i].speaker,
                bio: schedule[i].bio,
                picture: schedule[i].picture,
                startDate: schedule[i].startDate,
                endDate: schedule[i].endDate,
                room: schedule[i].room,
                level: schedule[i].level,
                type: schedule[i].type
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
        loader.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.scheduleWindow.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    var decoder = require("entitydecoder");
    var overlay = require("overlayHUD");
    var loader = overlay.load();
    loader.show();
    Ti.App.fireEvent("setMainTitle", {
        title: "Schedule"
    });
    Alloy.Collections.schedule.fetch({
        success: loadSchedule,
        error: loader.hide
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;