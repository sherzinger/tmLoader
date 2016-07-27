document.getElementById('sorlie-alive_dead-btn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {script: 'linegraph-sorlie_alive_dead.js'});
    });
});

