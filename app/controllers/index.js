var controls=require('controls'),
	dispatcher=require('dispatcher'),
	menuView=controls.getMenuView();

if (OS_ANDROID) {
	dispatcher.on('setMainTitle', function(e) {
		if ($.index.activity.actionBar) {
	    	$.index.activity.actionBar.title = e.title;
	   	}
	});
} else {
	dispatcher.on('setMainTitle', function(e) {
		if ($.titleLabel) {
	    	$.titleLabel.text = e.title;
	    }
	});
}

function openWindow(e) {
	$.drawermenu.showhidemenu();
	// on Android the event is received by the label, so watch out!
	controls.setMaincontentView(Alloy.createController(e.rowData.id));
}

Alloy.Globals.mainView = controls.getMainView();
controls.setMaincontentView(Alloy.createController('schedule'));

// add menu view to container exposed by widget
$.drawermenu.drawermenuview.add(menuView.getView()); // get view is an Alloy Method

// add view to container exposed by widget
$.drawermenu.drawermainview.add(Alloy.Globals.mainView.getView());

$.init = function() {
	if ($.menuBtn) {
		$.menuBtn.addEventListener('click', $.drawermenu.showhidemenu);
	}
	menuView.menuTable.addEventListener('singletap', openWindow);

	if (Ti.Platform.osname === "android") {
		if (! $.index.activity) {
			Ti.API.error("Can't access action bar on a lightweight window.");
		} else {
			if ($.index.activity.actionBar) {
				$.index.activity.actionBar.onHomeIconItemSelected = $.drawermenu.showhidemenu;
			}
		}
	}
};

$.index.addEventListener('open', $.init);

$.cleanup = function() {
	if ($.menuBtn) {
		$.menuBtn.removeEventListener('singletap', $.drawermenu.showhidemenu);
	}
	menuView.menuTable.removeEventListener('singletap', openWindow);

	dispatcher.off(null, null, $);
};

$.index.addEventListener('close', $.cleanup);

$.index.open();

Ti.App.addEventListener('openLink', function(e) {
    Ti.Platform.openURL(e.link);
});