var args = arguments[0] || {},
	moment = require('alloy/moment'),
	imagecache = require('imagecache');

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}
imagecache.cachedImageView('speakerimages', args.picture, $.pictureView);

$.titleLabel.text = args.get('title');
$.descriptionLabel.text = args.get('content');
$.nameLabel.text = args.speaker;
$.bioLabel.text = args.bio;
$.dateLabel.text = moment(args.get('startDate')).format('DD MMM HH:mm') + " - " + moment(args.get('startDate')).format('HH:mm');
$.roomLabel.text = args.get('room');

Ti.App.fireEvent('setMainTitle', {
	title: "Schedule"
});