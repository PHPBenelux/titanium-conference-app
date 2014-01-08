var args = arguments[0] || {};


function closeWindow(e) {
    $.newsDetailWindow.closeWindow();
}


$.titleLabel.text = args.title;
$.contentLabel.html = args.content + Alloy.CFG.css;
$.postDateLabel.text = args.postDate;