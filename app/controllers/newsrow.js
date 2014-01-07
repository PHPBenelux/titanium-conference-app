var args = arguments[0] || {};

function openDetail(e) {
    var newsDetailWin = Alloy.createController('newsdetail', args).getView();
    newsDetailWin.open();
}

$.titleLabel.text = Ti.Network.decodeURIComponent(args.title);
$.postDateLabel.text = args.postDate;