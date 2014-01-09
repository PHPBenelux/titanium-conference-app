var args = arguments[0] || {};

function closeWindow(e) {
    $.newsDetailWindow.closeWindow();
}

$.titleLabel.text = args.title;
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;
$.postDateLabel.text = "Posted on " + args.postDate;
