var args = arguments[0] || {},
    moment = require('alloy/moment'),
    decoder = require('entitydecoder'),
    dispatcher = require('dispatcher');

function cleanData(data) {
    var item = {
        properties: {
            itemId: data.id
        },
        template: 'newsRow',
        title: {
            text: 'undefined' !== typeof data.get('title') ? decoder.decode(data.get('title')) : ''
        },
        date: {
            text: 'undefined' !== typeof data.get('date') ? moment(data.get('date')).format('DD MMM YYYY, HH:mm') : ''
        }
    };
    return item;
}

var hideActivity = function () {
	$.newsWindow.remove($.activityIndicator);
};

function openDetail(e) {
    var item = Alloy.Collections.news.get(e.itemId),
    	newsDetailWin = Alloy.createController('newsdetail', Alloy.Collections.news.get(e.itemId)).getView();

    Alloy.Globals.mainView.contentView.add(newsDetailWin);
};

function loadNews(collection, response, options) {
	hideActivity();
	var section = Ti.UI.createListSection({}),
		newsItems = [],
        sections = [];

	_.each(collection.models, function(item, index) {
		newsItems.push(cleanData(item));	
	});
        
	section.setItems(newsItems);
	sections.push(section);	
	$.table.setSections(sections);
};

var style;
if (Ti.Platform.name === 'iPhone OS'){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}

$.activityIndicator.setStyle(style);
$.activityIndicator.show();
Alloy.Collections.news.fetch({
    success: loadNews,
    error: hideActivity
});

dispatcher.trigger('setMainTitle', { title: 'News' });