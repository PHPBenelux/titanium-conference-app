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

httpClient.open('GET', 'http://conference.phpbenelux.eu/2014/api/phpbenelux/schedule');
httpClient.send();
httpClient.onload = function() {
    var json = JSON.parse(this.responseText);
    if (json.length == 0) {
        $.table.headerTitle = "No data";
    }
    
    var schedule = json.posts;
    for (var i = 0, iLen = schedule.length; i < iLen; i++) {
        
        data.push(Alloy.createController('schedulerow', {
            title: schedule[i].title,
            content: schedule[i].content,
            startDate: schedule[i].timestamp_start,
            endDate: schedule[i].timestamp_end
        }).getView());
    }
    
    $.table.setData(data);
};
