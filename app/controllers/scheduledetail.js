var args = arguments[0] || {};

function closeWindow(e) {
    $.scheduleDetailWindow.close();
}

$.titleLabel.text = "Title";
$.descriptionLabel.html = "Description";
$.nameLabel.text = "Speaker name";
$.pictureView.image = "";
$.bioLabel.html = "Speaker bio";
$.dateLabel.text = "start - end";
$.roomLabel.text = "room name";
$.levelLabel.text = "level";
$.typeLabel.text = "type";