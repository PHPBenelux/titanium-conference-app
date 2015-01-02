var args = arguments[0] || {},
    controls = require('controls'),
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
	$.news.remove($.activityIndicator);
};

function openDetail(e) {
	var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON();

    _.defer(function() {
        controls.setMaincontentView(Alloy.createController('newsdetail', modelData));
    });
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
    success: hideActivity,
    error: hideActivity
});

dispatcher.trigger('setMainTitle', { title: 'News' });

$.init = function() {
    $.table.addEventListener('singletap', openDetail);
};

$.news.addEventListener('open', $.init);

$.cleanup = function() {

    $.table.removeEventListener('singletap', openDetail);

    // let Alloy clean up listeners to global collections for data-binding
    // always call it since it'll just be empty if there are none
    $.destroy();

    // remove all event listeners on the controller
    $.off();

    // and custom global dispatchers (all at once, via context)
    dispatcher.off(null, null, $);
};

$.news.addEventListener('close', $.cleanup);