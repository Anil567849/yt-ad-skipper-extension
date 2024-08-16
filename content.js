
// this code will run on client browser  [Inspect Element on Browser -> Console]
let observerInterval;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'startObserving') {
        if (!observerInterval) {
            observerInterval = setInterval(() => {
                const skipButton = document.getElementsByClassName('ytp-skip-ad-button')[0];
                if (skipButton) {
                    skipButton.click();
                }
            }, 1000);
            sendResponse({success: true, message: 'Observation started.'});
        } else {
            sendResponse({success: false, message: 'Already observing.'});
        }
    }else if (message.action === 'stopObserving') {
        if (observerInterval) {
            clearInterval(observerInterval);
            observerInterval = null;
            sendResponse({success: true, message: 'Observation stopped.'});
        } else {
            sendResponse({success: false, message: 'No observation in progress.'});
        }
    }
});