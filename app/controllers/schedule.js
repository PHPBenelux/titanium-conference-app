var args = arguments[0] || {};

function closeWindow(e) {
    $.scheduleWindow.close();
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
    for (var i = 0, iLen = schedule.length; i < iLen; i++) {
    	
    	if (schedule[i].speaker.length == 0 || !schedule[i].speaker) {
    		schedule[i].speaker = [{
    			post_title: 'PHPBenelux',
    			post_content: '',
    			picture_src: ''
    		}];
    	}
        
        data.push(Alloy.createController('schedulerow', {
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
    
    $.table.setData(data);
};
