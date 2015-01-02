var args = arguments[0] || {},
	moment = require('alloy/moment'),
	imagecache = require('imagecache'),
	dispatcher = require('dispatcher'),
	abstract = args.get('content'),
	speakerData, speakerView;

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}
imagecache.cachedImageView('speakerimages', args.picture, $.pictureView);
abstract = abstract.replace(/(<([^>]+)>)/ig,"");

$.titleLabel.text = args.get('title');
$.descriptionLabel.text = abstract;
$.dateLabel.text = moment(args.get('startDate'), 'X').format('DD MMM HH:mm') + " - " + moment(args.get('endDate'), 'X').format('HH:mm');
$.roomLabel.text = args.get('room');

speakerData = JSON.parse(args.get('speaker'));
for (var i = 0; i < speakerData.length; i++) {
	speakerView = Alloy.createController('speaker', speakerData[i]).getView();
	$.speakerContainer.add(speakerView);
}

dispatcher.trigger('setMainTitle', {
	title: "Schedule"
});
