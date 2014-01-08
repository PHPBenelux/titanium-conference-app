var args = arguments[0] || {};
var moment = require('alloy/moment');

function closeWindow(e) {
    $.scheduleWindow.closeWindow();
}

var data = [];
var httpClient = Ti.Network.createHTTPClient({
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('Unable to retrieve the data');
    }
});

httpClient.open('GET', Alloy.CFG.apiUrl + 'phpbenelux/schedule');
httpClient.send();
httpClient.onload = function() {
    var json = JSON.parse(this.responseText);
    if (json.length == 0) {
        $.table.headerTitle = "No data";
    }
    
    var schedule = json.posts;
    var sectionSchedule = [];
    var sections = [];
    for (var i = 0, iLen = schedule.length; i < iLen; i++) {
    	
    	// Handle items without an assigned speaker    	
    	if (schedule[i].speaker.length == 0 || !schedule[i].speaker) {
    		schedule[i].speaker = [{
    			post_title: 'PHPBenelux',
    			post_content: '',
    			picture_src: ''
    		}];
    	}
    	
    	// divide data into sections
    	var timestampKey = moment(schedule[i].timestamp_start).format('X');
    	if (!sectionSchedule[timestampKey]) {
    		sectionSchedule[timestampKey] = [];
    	}
    	
    	sectionSchedule[timestampKey].push(Alloy.createController('schedulerow', {
            title: schedule[i].title,
            content: schedule[i].content,
            speaker: schedule[i].speaker[0].post_title,
            bio: schedule[i].speaker[0].post_content,
            picture: schedule[i].speaker[0].picture_src,
            startDate: schedule[i].timestamp_start,
            endDate: schedule[i].timestamp_end,
            room: schedule[i].room.post_title,
            level: schedule[i].talk_level,
            type: schedule[i].talk_type,
        }).getView());
    }
    
    for (var jIndex in sectionSchedule) {
    	var currentSection = sectionSchedule[jIndex];
    	var sectionHeader = Ti.UI.createTableViewSection({ headerTitle: moment(jIndex).format('DD MMM HH:mm')});
    	
    	for (var k = 0, kLen = currentSection.length; k < kLen; k++) {
    		sectionHeader.add(currentSection[k]);
    	}
    	sections.push(sectionHeader);
    }
    
    $.table.setData(sections);
};
