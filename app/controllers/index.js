var controls=require('controls');

// get main and menu view as objects
var menuView=controls.getMenuView();

// add event listener in this context
menuView.menuTable.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
	// on Android the event is received by the label, so watch out!
	var drawerView = Alloy.createController(e.rowData.id).getView();
	mainView.contentView.add(drawerView);
});


var mainView=controls.getMainView();
Alloy.Globals.mainView = mainView;

// add menu view to container exposed by widget
$.drawermenu.drawermenuview.add(menuView.getView()); // get view is an Alloy Method

$.menuBtn.addEventListener('click',$.drawermenu.showhidemenu);

// add view to container exposed by widget
$.drawermenu.drawermainview.add(mainView.getView());

$.index.open();

Ti.App.addEventListener('openLink', function(e) {
    Ti.Platform.openURL(e.link);
});