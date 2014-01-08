var args = arguments[0] || {};

function closeWindow(e) {
    $.scheduleDetailWindow.close();
}

$.titleLabel.text = args.title;
$.descriptionLabel.html = args.content;
$.nameLabel.text = args.speaker;
$.pictureView.image = args.picture;
$.bioLabel.html = args.bio;
$.dateLabel.text = args.startDate + " - " + args.endDate;
$.roomLabel.text = args.room;
$.levelLabel.text = args.level;
$.typeLabel.text = args.type;
