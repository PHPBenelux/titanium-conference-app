var controls=require('controls');
var menuView=controls.getMenuView();

$.index.addEventListener("open", function() {
    if (Ti.Platform.osname === "android") {
        if (! $.index.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
            actionBar = $.index.activity.actionBar;
            if (actionBar) {
                actionBar.onHomeIconItemSelected = $.drawermenu.showhidemenu;
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