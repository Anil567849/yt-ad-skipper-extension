// this code will run on extension area [Extension Area -> Inspect Element -> Console]
window.onload = function() {
    let observing = false;
    const btn = document.getElementById('btnStartObserve');    

    btn.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            if (!observing) {
                chrome.tabs.sendMessage(tabs[0].id, {action: 'startObserving'}, function(response) {

                    if (response && response.success) {
                        // console.log(response.message);
                        btn.textContent = 'Stop Observing';
                        observing = true;
                    } else {
                        btn.textContent = 'Stop Observing';
                        observing = true;
                        // console.error('Failed to start observing:', response.message);
                    }
                    
                });
            } else {
                chrome.tabs.sendMessage(tabs[0].id, {action: 'stopObserving'}, function(response) {
                    if (response && response.success) {
                        // console.log(response.message);
                        btn.textContent = 'Start Observing';
                        observing = false;
                    } else {
                        btn.textContent = 'Start Observing';
                        observing = false;
                        // console.error('Failed to stop observing:', response.message);
                    }
                });
            }
        });
    });
}



