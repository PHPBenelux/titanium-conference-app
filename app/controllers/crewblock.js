var args = arguments[0] || {};
$.pictureImage.image = args.picture;
$.nameLabel.text = args.name;
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;