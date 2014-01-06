function openNews(e) {
	var newsWin = Alloy.createController('news').getView();
	newsWin.open;
}

function openSchedule(e) {
	var scheduleWin = Alloy.createController('schedule').getView();
	scheduleWin.open();
}

function openAbout(e) {
	var aboutWin = Alloy.createController('about').getView();
	aboutWin.open();
}

$.index.open();