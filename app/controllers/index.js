function openNews(e) {
	var newsWin = Alloy.createController('news').getView();
	$.navWindow.openWindow(newsWin, { animated:true });
}

function openSchedule(e) {
	var scheduleWin = Alloy.createController('schedule').getView();
	$.navWindow.openWindow(scheduleWin, { animated:true });
}

function openAbout(e) {
	var aboutWin = Alloy.createController('about').getView();
	$.navWindow.openWindow(aboutWin, { animated:true });
}

$.navWindow.open();
Alloy.Globals.navWindow = $.navWindow;