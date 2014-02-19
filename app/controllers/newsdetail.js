var args = arguments[0] || {};
var moment = require('alloy/moment');
var decoder = require('entitydecoder');

function closeWindow(e) {
    $.newsDetailWindow.closeWindow();
}

$.titleLabel.text = decoder.decode(args.title);
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;
$.postDateLabel.text = "Posted on " + moment(args.date).format('DD MMM YYYY, HH:mm');
Ti.App.fireEvent('setMainTitle', {
	title: "News"
});