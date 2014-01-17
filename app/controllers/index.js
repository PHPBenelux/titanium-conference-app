function openNewWindow(viewName) {
	var newWin = Alloy.createController(viewName).getView();
	if ($.navWindow) {
		$.navWindow.openWindow(newWin, { animated:true });
	} else {
		newWin.open({animated: true});	
	}
}

function openNews(e) {
	openNewWindow('news');
}

function openSchedule(e) {
	openNewWindow('schedule');
}

function openAbout(e) {
	openNewWindow('about');
}

if ($.navWindow) {
	$.navWindow.open();
	Alloy.Globals.navWindow = $.navWindow;
} else {
	$.indexWindow.open();
}

Ti.App.addEventListener('openLink', function(e) {
    Ti.Platform.openURL(e.link);
});