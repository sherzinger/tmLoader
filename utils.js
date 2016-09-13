function setWorkflow(workflow) {
    return new Promise(function(resolve, reject) { 
        var interval = setInterval(function() {
            var scope = angular.element(document.getElementById('sr-index')).scope();
            if (scope) {
                clearInterval(interval);
                scope.$apply(function() { scope.template = workflow; });
                resolve();
            }
        }, 100);
    });
}

function changeToTab(tab) {
    return new Promise(function(resolve, reject) {
        if (tab === 'runTab') {
            document.querySelector('#smartRPanel .heim-tab[aria-controls="fragment-_run-_analysis"] a').click();
        }
        var interval = setInterval(function() {
            if (document.querySelector('run-button')) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}

function fetchData() {
    return new Promise(function(resolve, reject) {
        document.querySelector('#smartRPanel fetch-button input').click();
        var interval = setInterval(function() {
            if (document.querySelector('#smartRPanel fetch-button span').innerHTML.indexOf('Task complete!') !== -1) {
                clearInterval(interval);
                resolve();
            }
        }, 250);
    });
}

function runAnalysis() {
    document.querySelector('run-button input').click();
}

function waitForAngular() {
    return new Promise(function(resolve, reject) { 
        var interval = setInterval(function() {
            if (typeof angular !== 'undefined') {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}

function waitForTemplate() {
    return new Promise(function(resolve, reject) { 
        var interval = setInterval(function() {
            if (document.querySelector('#smartRPanel concept-box')) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}


function setData(numData, catData, hdData) {
    return new Promise(function(resolve, reject) {
        if (numData) {
            document.querySelector('#smartRPanel concept-box[type="LD-numerical"] .sr-drop-input').innerHTML += numData;
        }
        if (catData) {
            document.querySelector('#smartRPanel concept-box[type="LD-categorical"] .sr-drop-input').innerHTML += catData;
        }
        if (hdData) {
            document.querySelector('#smartRPanel concept-box[type="HD"] .sr-drop-input').innerHTML += hdData;
        }
        setTimeout(resolve, 250);
    });
}

function getControllerScope(controllerName) {
    return angular.element(document.querySelector('div[ng-controller="' + controllerName + 'Controller"]')).scope();
}
