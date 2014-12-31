var args = arguments[0] || {};
var moment = require('alloy/moment');
imagecache = require('imagecache');

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}
imagecache.cachedImageView('speakerimages', args.picture, $.pictureView);
Ti.API.info(JSON.stringify(args));
$.titleLabel.text = args.title;
$.descriptionLabel.text = args.content;
$.nameLabel.text = args.speaker;
$.bioLabel.text = args.bio;
$.dateLabel.text = moment(args.startDate).format('DD MMM HH:mm') + " - " + moment(args.startDate).format('HH:mm');
$.roomLabel.text = args.room;

Ti.App.fireEvent('setMainTitle', {
	title: "Schedule"
});