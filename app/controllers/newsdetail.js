var args = arguments[0] || {},
    moment = require('alloy/moment'),
    decoder = require('entitydecoder'),
    dispatcher = require('dispatcher'),
    controls = require('controls');

function closeWindow(e) {
    controls.setMaincontentView(Alloy.createController('news'));
}

$.titleLabel.text = decoder.decode(args.get('title'));
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.get('content') + Alloy.CFG.htmlSuffix;
$.postDateLabel.text = "Posted on " + moment(args.get('date')).format('DD MMM YYYY, HH:mm');

dispatcher.trigger('setMainTitle', {
	title: "News"
});