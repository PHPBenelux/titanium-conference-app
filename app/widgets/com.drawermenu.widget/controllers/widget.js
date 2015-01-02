var menuOpen = false;

var showhidemenu=function(){
	if (menuOpen){
		moveTo="0";
		menuOpen=false;
	}else{
		moveTo="150dp";
		menuOpen=true;
	}

	$.drawermainview.width=Ti.Platform.displayCaps.platformWidth;
	$.drawermainview.animate({
		left:moveTo,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT
	});
};

Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.drawermainview.width=Ti.Platform.displayCaps.platformWidth;
});

exports.showhidemenu=showhidemenu;