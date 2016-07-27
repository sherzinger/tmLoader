function triggerScenario(scenario) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL('scenarios/' + scenario);
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}

chrome.runtime.onMessage.addListener(function(request) {
    triggerScenario(request.script);
});

document.addEventListener('keypress', function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    
    switch (String.fromCharCode(charCode)) {
        case '1': {
            triggerScenario('linegraph-timeseries-some.js');
            break;
        }
        case '2': {
            triggerScenario('linegraph-timeseries-female_male.js');
            break;
        }
    }
});
