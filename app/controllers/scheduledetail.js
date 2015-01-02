var args = arguments[0] || {},
	moment = require('alloy/moment'),
	imagecache = require('imagecache'),
	dispatcher = require('dispatcher'),
	abstract = args.get('content');

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}
imagecache.cachedImageView('speakerimages', args.picture, $.pictureView);
abstract = abstract.replace(/(<([^>]+)>)/ig,"");

$.titleLabel.text = args.get('title');
$.descriptionLabel.text = abstract;
$.nameLabel.text = args.speaker;
$.bioLabel.text = args.bio;
$.dateLabel.text = moment(args.get('startDate')).format('DD MMM HH:mm') + " - " + moment(args.get('startDate')).format('HH:mm');
$.roomLabel.text = args.get('room');

dispatcher.trigger('setMainTitle', {
	title: "Schedule"
});