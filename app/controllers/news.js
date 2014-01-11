var args = arguments[0] || {};
var moment = require('alloy/moment');
var decoder = require('entitydecoder');
var overlay = require("overlayHUD");
var loader = overlay.load();

function closeWindow(e) {
    $.newsWindow.closeWindow();
}

function cleanData(model) {
	var transform = model.toJSON();
	transform.title = decoder.decode(transform.title);
	transform.date = moment(transform.date).format('DD MMM YYYY, HH:mm');
	return transform;
}

$.table.addEventListener('click', function(e) {
	var modelData = Alloy.Collections.news.get(e.rowData.model).toJSON(); 
    var newsDetailWin = Alloy.createController('newsdetail', modelData).getView();
    
	if (Alloy.Globals.navWindow) {
		Alloy.Globals.navWindow.openWindow(newsDetailWin, {animated:true});
	} else {
		newsDetailWin.open({animated: true});	
	}
});

loader.show();
Alloy.Collections.news.fetch({
    success: loader.hide,
    error: loader.hide
});
