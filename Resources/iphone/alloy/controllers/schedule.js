function Controller() {
    function sortObj(arr) {
        var sortedKeys = new Array();
        var sortedObj = {};
        for (var i in arr) sortedKeys.push(i);
        sortedKeys.sort();
        for (var i in sortedKeys) sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
        return sortedObj;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.scheduleWindow = Ti.UI.createWindow({
        fullscreen: true,
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
    var httpClient = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("Unable to retrieve the data");
        }
    });
    httpClient.open("GET", Alloy.CFG.apiUrl + "phpbenelux/schedule");
    httpClient.send();
    httpClient.onload = function() {
        var json = JSON.parse(this.responseText);
        0 == json.length && ($.table.headerTitle = "No data");
        var schedule = json.posts;
        var sectionSchedule = [];
        var sections = [];
        for (var i = 0, iLen = schedule.length; iLen > i; i++) {
            0 != schedule[i].speaker.length && schedule[i].speaker || (schedule[i].speaker = [ {
                post_title: "PHPBenelux",
                post_content: "",
                picture_src: ""
            } ]);
            var timestampKey = moment(schedule[i].timestamp_start).format("X");
            sectionSchedule[timestampKey] || (sectionSchedule[timestampKey] = []);
            sectionSchedule[timestampKey].push(Alloy.createController("schedulerow", {
                title: schedule[i].title,
                content: schedule[i].content,
                speaker: schedule[i].speaker[0].post_title,
                bio: schedule[i].speaker[0].post_content,
                picture: schedule[i].speaker[0].picture_src,
                startDate: schedule[i].timestamp_start,
                endDate: schedule[i].timestamp_end,
                room: schedule[i].room.post_title,
                level: schedule[i].talk_level,
                type: schedule[i].talk_type
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
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;