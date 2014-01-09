var args = arguments[0] || {};

function openDetail(e) {
    var scheduleDetailWin = Alloy.createController('scheduledetail', args).getView();
    
	if (Alloy.Globals.navWindow) {
		Alloy.Globals.navWindow.openWindow(scheduleDetailWin, {animated:true});
	} else {
		scheduleDetailWin.open({animated: true});	
	}
}

$.roomLabel.text = args.room;
$.titleLabel.text = args.title;
$.speakerLabel.text = args.speaker;
