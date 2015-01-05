var Alloy=require('alloy'),
	defaultOptions = {
		isSubView: false
	},
	_ctrl = null;

exports.setMaincontentView=function(newCtrl, options) {
	if (_ctrl && _ctrl.ctrlOptions.isSubView !== false) {
		Alloy.Globals.mainView.contentView.remove(_ctrl.getView());
		_.isFunction(_ctrl.cleanup) && _ctrl.cleanup();
	}

	_ctrl = newCtrl;
	_ctrl.ctrlOptions = defaultOptions;
	_.extend(_ctrl.ctrlOptions, options);
	
	Alloy.Globals.mainView.contentView.add(_ctrl.getView());
	_.isFunction(_ctrl.init) && _ctrl.init();
};

exports.getMainView=function(){
	return Alloy.createController('mainview');
};

exports.getMenuView=function(){
	return Alloy.createController('menuview');
};

exports.getMenuButton=function(args){
	var button = Titanium.UI.createButton({
	   title: 'Menu',
	   top: 10,
	   width: 100,
	   height: 50
	});
	return button;
};
