var args = arguments[0] || {};

function openDetail(e) {
    var newsDetailWin = Alloy.createController('newsdetail', args).getView();
    
	if (Alloy.Globals.navWindow) {
		Alloy.Globals.navWindow.openWindow(newsDetailWin, {animated:true});
	} else {
		newsDetailWin.open({animated: true});	
	}
}

$.titleLabel.text = Ti.Network.decodeURIComponent(args.title);
$.postDateLabel.text = args.postDate;