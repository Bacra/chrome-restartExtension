// 按钮事件
var id = 'kcjbhonkhjbelfbeapocefmcpbpddllb';
chrome.browserAction.onClicked.addListener(function(){
	chrome.management.setEnabled(id, false, function() {
		chrome.management.setEnabled(id, true);
	});
});