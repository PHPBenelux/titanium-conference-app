var args = arguments[0] || {},
    moment = require('alloy/moment'),
    controls = require('controls'),
    dispatcher = require('dispatcher');

var hideActivity = function () {
	$.schedule.remove($.activityIndicator);
};

function renderSpeakers(speakerData) {
	var speakers = JSON.parse(speakerData),
		speakertext = '',
		i;

	for(i = 0; i < speakers.length; i++) {
		if (i !== 0) {
			speakertext += ' & ';
		}
		speakertext += speakers[i].name;
	}

	return speakertext;
}

function prepareItem(data) {
    var item = {
        properties: {
            itemId: data.id
        },
        template: 'scheduleRow',
        title: {
            text: 'undefined' !== typeof data.get('title') ? data.get('title') : ''
        },
        room: {
            text: 'undefined' !== typeof data.get('room') ? data.get('room') : ''
        },
        speaker: {
            text: 'undefined' !== typeof data.get('speaker') ? renderSpeakers(data.get('speaker')) : ''
        }
        //thumbnail: {
        //    image: 'undefined' !== typeof model.__transform.thumbnail ? model.__transform.thumbnail : model.get('thumbnail')
        //}
    };
    return item;
}

function openDetail(e) {
    var item = Alloy.Collections.schedule.get(e.itemId);

    _.defer(function() {
        controls.setMaincontentView(Alloy.createController('scheduledetail', item));
    });
}


function loadSchedule(collection, response, options) {
    // always re-sort using the backbone comparator
    collection.sort();

    if (collection.models.length == 0) {
        $.listing.footerTitle = "No schedule data";
        hideActivity();
        return true;
    } else {
        $.listing.footerTitle = '';
    }

    var slots = {},
        sections = [];
    _.each(collection.models, function(session, index) {
    	// divide data into sections
        var timestampKey = session.get('startDate').toString();

        if (!slots[timestampKey]) {
            slots[timestampKey] = {
                "talks": []
            };
    	}

        slots[timestampKey].talks.push(prepareItem(session));
    });

    _.each(slots, function(elm, index) {
        var section = Ti.UI.createListSection({headerTitle: moment(index, 'X').format('DD MMM HH:mm')});
        section.setItems(elm.talks);
        sections.push(section);
    });

    $.listing.setSections(sections);
    hideActivity();
};

var style;
if (OS_IOS){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}

$.activityIndicator.setStyle(style);
$.activityIndicator.show();

$.init = function() {

};

$.schedule.addEventListener('open', $.init);

$.cleanup = function() {

    // let Alloy clean up listeners to global collections for data-binding
    // always call it since it'll just be empty if there are none
    $.destroy();

    // remove all event listeners on the controller
    $.off();

    // and custom global dispatchers (all at once, via context)
    dispatcher.off(null, null, $);
};

$.schedule.addEventListener('close', $.cleanup);


dispatcher.trigger('setMainTitle', {
	title: 'Schedule'
});

Alloy.Collections.schedule.fetch({ success: loadSchedule, error: hideActivity });
