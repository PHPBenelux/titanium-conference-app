var args = arguments[0] || {};
var moment = require('alloy/moment');
var decoder = require('entitydecoder');
var overlay = require("overlayHUD");
var loader = overlay.load();

function cleanData(model) {
	var transform = model.toJSON();
	transform.title = decoder.decode(transform.title);
	transform.date = moment(transform.date).format('DD MMM YYYY, HH:mm');
	return transform;
}

$.table.addEventListener('click', function(e) {
	var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON(); 
    var newsDetailWin = Alloy.createController('newsdetail', modelData).getView();
    Alloy.Globals.mainView.contentView.add(newsDetailWin);
});

loader.show();
Alloy.Collections.news.fetch({
    success: loader.hide,
    error: loader.hide
});
Ti.App.fireEvent('setMainTitle', {
	title: 'News'
});