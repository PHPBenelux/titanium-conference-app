var args = arguments[0] || {};

$.nameLabel.text = args.name;
$.bioLabel.text = args.speaker_bio.replace(/(<([^>]+)>)/ig,"");
$.pictureView.image = args.image_300;