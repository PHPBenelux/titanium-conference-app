var args = arguments[0] || {};
var moment = require('alloy/moment');

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}

$.titleLabel.text = args.title;
$.descriptionLabel.html = args.content + Alloy.CFG.css;
$.nameLabel.text = args.speaker;
$.pictureView.image = args.picture;
$.bioLabel.html = args.bio + Alloy.CFG.css;
$.dateLabel.text = moment(args.startDate).format('DD MMM HH:mm') + " - " + moment(args.startDate).format('HH:mm');
$.roomLabel.text = args.room;
$.levelLabel.text = args.level;
$.typeLabel.text = args.type;