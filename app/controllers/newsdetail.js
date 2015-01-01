var args = arguments[0] || {},
    moment = require('alloy/moment'),
    decoder = require('entitydecoder'),
    dispatcher = require('dispatcher');

function closeWindow(e) {
    $.newsDetailWindow.closeWindow();
}

$.titleLabel.text = decoder.decode(args.title);
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;
$.postDateLabel.text = "Posted on " + moment(args.date).format('DD MMM YYYY, HH:mm');

dispatcher.trigger('setMainTitle', {
	title: "News"
});