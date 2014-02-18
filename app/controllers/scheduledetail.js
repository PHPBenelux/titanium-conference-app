var args = arguments[0] || {};
var moment = require('alloy/moment');
imagecache = require('imagecache');

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}
imagecache.cachedImageView('speakerimages', args.picture, $.pictureView);
// TODO set title
//$.scheduleDetailWindow.setTitle(args.title);
$.titleLabel.text = args.title;
$.descriptionLabel.text = args.content;
$.nameLabel.text = args.speaker;
$.bioLabel.text = args.bio;
$.dateLabel.text = moment(args.startDate).format('DD MMM HH:mm') + " - " + moment(args.startDate).format('HH:mm');
$.roomLabel.text = args.room;
$.levelLabel.text = args.level;
$.typeLabel.text = args.type;

Ti.App.fireEvent('setMainTitle', {
	title: args.title
});