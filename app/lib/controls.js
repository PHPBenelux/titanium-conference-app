var Alloy=require('alloy'),
	_ctrl = null;

exports.setMaincontentView=function(newCtrl, options) {
	if (_ctrl) {
		Alloy.Globals.mainView.contentView.remove(_ctrl.getView());
		_.isFunction(_ctrl.cleanup) && _ctrl.cleanup();
	}

	_ctrl = newCtrl;
	Alloy.Globals.mainView.contentView.add(_ctrl.getView());
	_.isFunction(_ctrl.init) && _ctrl.init();
};

exports.getMainView=function(){
	return Alloy.createController('mainview');
};

exports.getMenuView=function(){
	var v=Alloy.createController('menuview');

	return v;
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
