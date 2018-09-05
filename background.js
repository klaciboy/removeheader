// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript({
		code: 'document.head.parentNode.removeChild(document.head)'
	});
});
