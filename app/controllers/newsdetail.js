var args = arguments[0] || {};


function closeWindow(e) {
    $.newsDetailWindow.close();
}


$.titleLabel.text = args.title;
$.contentLabel.html = args.content;
$.postDateLabel.text = args.postDate;