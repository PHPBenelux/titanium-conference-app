var args = arguments[0] || {},
    moment = require('alloy/moment'),
    decoder = require('entitydecoder'),
    dispatcher = require('dispatcher'),
    controls = require('controls');

function closeWindow(e) {
	if (OS_IOS) {
		var items = Alloy.Globals.toolbarView.getItems();
		items.pop();
		Alloy.Globals.toolbarView.setItems(items);
	}
    controls.setMaincontentView(Alloy.createController('news'));
}

if (OS_IOS) {
	var backButton = Ti.UI.createButton({title: 'Back'}),
		toolbarItems = Alloy.Globals.toolbarView.getItems();
		
	if (toolbarItems.length < 5) {
		backButton.addEventListener('click', closeWindow);
		toolbarItems.push(backButton);
		
		Alloy.Globals.toolbarView.setItems(toolbarItems);
	}
}

$.titleLabel.text = decoder.decode(args.get('title'));
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.get('content') + Alloy.CFG.htmlSuffix;
$.postDateLabel.text = "Posted on " + moment(args.get('date')).format('DD MMM YYYY, HH:mm');

dispatcher.trigger('setMainTitle', {
	title: "News"
});