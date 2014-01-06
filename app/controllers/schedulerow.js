var args = arguments[0] || {};


function openDetail(e) {
    var scheduleDetailWin = Alloy.createController('scheduledetail', args).getView();
    scheduleDetailWin.open();
}

$.titleLabel.text = args.title;
$.startTimeLabel.text = args.startDate;
$.endTimeLabel.text = args.endDate;
$.speakerLabel.text = 'speaker';