var args = arguments[0] || {};


function openDetail(e) {
    var scheduleDetailWin = Alloy.createController('scheduledetail', args).getView();
    scheduleDetailWin.open();
}

$.startTimeLabel.text = args.startDate;
$.endTimeLabel.text = args.endDate;
$.titleLabel.text = args.title;
$.speakerLabel.text = args.speaker;