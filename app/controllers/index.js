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
	if (typeof e.rowData !== 'undefined') {
		$.drawermenu.showhidemenu();
		// on Android the event is received by the label, so watch out!
		controls.setMaincontentView(Alloy.createController(e.rowData.id));
	}
}

function handleAndroidBack(e) {
	var _viewCount = Alloy.Globals.mainView.contentView.children.length;
	if (_viewCount > 1) {
		Alloy.Globals.mainView.contentView.remove(Alloy.Globals.mainView.contentView.children[(_viewCount - 1)]);
	} else {
		var dialogs = require('alloy/dialogs');
		dialogs.confirm({
			title: "Exit",
			message: "Do you really want to quit?",
			callback: function () {
				$.index.close();
			}
		});
	}
};

Alloy.Globals.mainView = controls.getMainView();
if (OS_IOS) {
	Alloy.Globals.toolbarView = $.toolbar;
}
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

	if (OS_ANDROID) {
		$.index.addEventListener('androidback', handleAndroidBack);

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

	if (OS_ANDROID) {
		$.index.removeEventListener('androidback', handleAndroidBack);
	}

	dispatcher.off(null, null, $);
};

$.index.addEventListener('close', $.cleanup);

$.index.open();

Ti.App.addEventListener('openLink', function(e) {
    Ti.Platform.openURL(e.link);
});