var args = arguments[0] || {};

function openDetail(e) {
    var newsDetailWin = Alloy.createController('newsdetail', args).getView();
    Alloy.Globals.navWindow.openWindow(newsDetailWin, {animated:true});
}

$.titleLabel.text = Ti.Network.decodeURIComponent(args.title);
$.postDateLabel.text = args.postDate;