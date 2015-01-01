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

$.index.addEventListener("open", function() {
    if (Ti.Platform.osname === "android") {
        if (! $.index.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
            if ($.index.activity.actionBar) {
                $.index.activity.actionBar.onHomeIconItemSelected = $.drawermenu.showhidemenu;
            }
        }
    }
});

// add event listener in this context
menuView.menuTable.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
	// on Android the event is received by the label, so watch out!
	var drawerView = Alloy.createController(e.rowData.id).getView();
	Alloy.Globals.mainView.contentView.add(drawerView);
});

Alloy.Globals.mainView = controls.getMainView();

// add menu view to container exposed by widget
$.drawermenu.drawermenuview.add(menuView.getView()); // get view is an Alloy Method

if ($.menuBtn) {
	$.menuBtn.addEventListener('click', $.drawermenu.showhidemenu);
}

// add view to container exposed by widget
$.drawermenu.drawermainview.add(Alloy.Globals.mainView.getView());

$.index.open();

Ti.App.addEventListener('openLink', function(e) {
    Ti.Platform.openURL(e.link);
});