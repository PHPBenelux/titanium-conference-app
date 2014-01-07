var args = arguments[0] || {};

function closeWindow(e) {
    $.scheduleDetailWindow.closeWindow();
}

$.titleLabel.text = "Title";
$.descriptionLabel.html = "Description" + Alloy.CFG.css;
$.nameLabel.text = "Speaker name";
$.pictureView.image = "";
$.bioLabel.html = "Speaker bio" + Alloy.CFG.css;
$.dateLabel.text = "start - end";
$.roomLabel.text = "room name";
$.levelLabel.text = "level";
$.typeLabel.text = "type";