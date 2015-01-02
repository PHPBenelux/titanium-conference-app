var args = arguments[0] || {},
	imagecache = require('imagecache');

$.nameLabel.text = args.name;
$.bioLabel.text = args.speaker_bio.replace(/(<([^>]+)>)/ig,"");

imagecache.cachedImageView('speakerimages', args.image_75, $.pictureView);