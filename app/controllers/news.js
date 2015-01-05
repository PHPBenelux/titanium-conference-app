var args = arguments[0] || {},
    controls = require('controls'),
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
	$.news.remove($.activityIndicator);
};

function openDetail(e) {
	var item = Alloy.Collections.news.get(e.itemId);

    _.defer(function() {
        controls.setMaincontentView(Alloy.createController('newsdetail', item), { isSubView: true });
    });
};

function loadNews(collection, response, options) {
    // always re-sort using the backbone comparator
    collection.sort();

    if (collection.models.length == 0) {
        $.table.footerTitle = "No news data";
        hideActivity();
        return true;
    } else {
        $.table.footerTitle = '';
    }

	var section = Ti.UI.createListSection({}),
		newsItems = [],
        sections = [];

	_.each(collection.models, function(item, index) {
		newsItems.push(cleanData(item));
	});

	section.setItems(newsItems);
	sections.push(section);
	$.table.setSections(sections);
    hideActivity();
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

$.init = function() {
};

$.news.addEventListener('open', $.init);

$.cleanup = function() {

    // let Alloy clean up listeners to global collections for data-binding
    // always call it since it'll just be empty if there are none
    $.destroy();

    // remove all event listeners on the controller
    $.off();

    // and custom global dispatchers (all at once, via context)
    dispatcher.off(null, null, $);
};

$.news.addEventListener('close', $.cleanup);
