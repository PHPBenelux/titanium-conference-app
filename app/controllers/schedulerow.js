var args = arguments[0] || {};
var controls=require('controls');

function openDetail(e) {
    var scheduleDetailWin = Alloy.createController('scheduledetail', args).getView();
    
    Alloy.Globals.mainView.contentView.add(scheduleDetailWin);
}

$.roomLabel.text = args.room;
$.titleLabel.text = args.title;
$.speakerLabel.text = args.speaker;
