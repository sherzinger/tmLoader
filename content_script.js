function injectFile(file) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL(file);
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}

injectFile('utils.js');

document.addEventListener('keypress', function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    
    switch (String.fromCharCode(charCode)) {
        case '1': {
            injectFile('scenarios/linegraph1.js');
            break;
        }
        case '2': {
            injectFile('scenarios/linegraph2.js');
            break;
        }
        case '3': {
            injectFile('scenarios/linegraph3.js');
            break;
        }

        case '4': {
            injectFile('scenarios/boxplot1.js');
            break;
        }
    }
});
