var args = arguments[0] || {};

function openDetail(e) {
    var newsDetailWin = Alloy.createController('newsdetail', args).getView();
    newsDetailWin.open();
}

$.titleLabel.text = args.title;
$.postDateLabel.text = args.postDate;