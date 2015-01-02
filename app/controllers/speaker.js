var args = arguments[0] || {};

$.nameLabel.text = args.name;
$.bioLabel.text = args.bio.replace(/(<([^>]+)>)/ig,"");
$.pictureView.image = args.image_75;