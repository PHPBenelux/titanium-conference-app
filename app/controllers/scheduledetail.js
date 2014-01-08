var args = arguments[0] || {};
var moment = require('alloy/moment');

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}
$.scheduleDetailWindow.setTitle(args.title);
$.titleLabel.text = args.title;
$.descriptionLabel.text = args.content;
$.nameLabel.text = args.speaker;
$.pictureView.image = args.picture;
$.bioLabel.text = args.bio;
$.dateLabel.text = moment(args.startDate).format('DD MMM HH:mm') + " - " + moment(args.startDate).format('HH:mm');
$.roomLabel.text = args.room;
$.levelLabel.text = args.level;
$.typeLabel.text = args.type;