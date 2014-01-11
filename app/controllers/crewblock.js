var args = arguments[0] || {};
imagecache = require('imagecache');
imagecache.cachedImageView('crewimages', args.picture, $.pictureImage);
$.nameLabel.text = args.name;
$.contentLabel.html = Alloy.CFG.htmlPrepend + args.content + Alloy.CFG.htmlSuffix;