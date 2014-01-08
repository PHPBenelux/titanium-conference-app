var args = arguments[0] || {};

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}

$.titleLabel.text = args.title;
$.descriptionLabel.html = args.content + Alloy.CFG.css;
$.nameLabel.text = args.speaker;
$.pictureView.image = args.picture;
$.bioLabel.html = args.bio + Alloy.CFG.css;
$.dateLabel.text = args.startDate + " - " + args.endDate;
$.roomLabel.text = args.room;
$.levelLabel.text = args.level;
$.typeLabel.text = args.type;