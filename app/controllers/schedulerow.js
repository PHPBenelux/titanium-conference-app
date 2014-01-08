var args = arguments[0] || {};

function openDetail(e) {
    var scheduleDetailWin = Alloy.createController('scheduledetail', args).getView();
    Alloy.Globals.navWindow.openWindow(scheduleDetailWin, {animated:true});
}

$.roomLabel.text = args.room;
$.titleLabel.text = args.title;
$.speakerLabel.text = args.speaker;
