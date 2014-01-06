var args = arguments[0] || {};

function openDetail(e) {
	alert('row index = ' + JSON.stringify(e.index));
	var scheduleDetailWin = Alloy.createController('scheduledetail').getView();
	scheduleDetailWin.open();
}
