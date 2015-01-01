var args = arguments[0] || {},
    moment = require('alloy/moment'),
    decoder = require('entitydecoder'),
    dispatcher = require('dispatcher');

function cleanData(model) {
	var transform = model.toJSON();
	transform.title = decoder.decode(transform.title);
	transform.date = moment(transform.date).format('DD MMM YYYY, HH:mm');
	return transform;
}

var hideActivity = function () {
	$.newsWindow.remove($.activityIndicator);
};

$.table.addEventListener('click', function(e) {
	var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON();
    var newsDetailWin = Alloy.createController('newsdetail', modelData).getView();
    Alloy.Globals.mainView.contentView.add(newsDetailWin);
});

var style;
if (Ti.Platform.name === 'iPhone OS'){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}

$.activityIndicator.setStyle(style);
$.activityIndicator.show();
Alloy.Collections.news.fetch({
    success: hideActivity,
    error: hideActivity
});

dispatcher.trigger('setMainTitle', { title: 'News' });