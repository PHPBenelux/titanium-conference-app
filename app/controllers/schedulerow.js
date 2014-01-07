var args = arguments[0] || {};
var moment = require('alloy/moment');

function openDetail(e) {
    var scheduleDetailWin = Alloy.createController('scheduledetail', args).getView();
    Alloy.Globals.navWindow.openWindow(scheduleDetailWin, {animated:true});
}

var startDate = moment(args.startDate);
var endDate = moment(args.endDate);

$.titleLabel.text = args.title;
$.startTimeLabel.text = startDate.format('DD MMM, HH:mm');
$.endTimeLabel.text = startDate.format('DD MMM, HH:mm');
$.speakerLabel.text = 'speaker';