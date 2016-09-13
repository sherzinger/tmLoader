var TIMESERIES = {
    DATA: '<div conceptname="Age" conceptid="\\\\Demo Data\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Demographics\\Age\\" conceptlevel="4" concepttooltip="\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Demographics\\Age\\" concepttablename="CONCEPT_DIMENSION" conceptdimcode="\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Demographics\\Age\\" conceptcomment="" normalunits="ratio" setvaluemode="novalue" setvalueoperator="LT" setvaluehighlowselect="N" setvaluehighvalue="" setvaluelowvalue="" setvalueunits="" oktousevalues="Y" setnodetype="valueicon" visualattributes="LEAF,ACTIVE" applied_path="@" modifiednodepath="undefined" modifiednodeid="undefined" modifiednodelevel="undefined" class="panelBoxListItem x-tree-node-collapsed x-tree-node-leaf" conceptsetvaluetext="" conceptshortname="Age" id="ext-gen218"><span class="x-tree-node-icon valueicon"></span><span class="concept-text">Age </span></div>',
    ALIVE: '<div conceptname="Alive" conceptid="\\\\Demo Data\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Vital Status\\Alive\\" conceptlevel="4" concepttooltip="\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Vital Status\\Alive\\" concepttablename="CONCEPT_DIMENSION" conceptdimcode="\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Vital Status\\Alive\\" conceptcomment="" normalunits="" setvaluemode="novalue" setvalueoperator="LT" setvaluehighlowselect="N" setvaluehighvalue="" setvaluelowvalue="" setvalueunits="" oktousevalues="N" setnodetype="alphaicon" visualattributes="LEAF,ACTIVE" applied_path="@" modifiednodepath="undefined" modifiednodeid="undefined" modifiednodelevel="undefined" class="panelBoxListItem x-tree-node-collapsed x-tree-node-leaf" conceptsetvaluetext="" conceptshortname="Alive" id="ext-gen185"><span class="x-tree-node-icon alphaicon"></span><span class="concept-text">Alive </span></div>',
    DEAD: '<div conceptname="Dead" conceptid="\\\\Demo Data\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Vital Status\\Dead\\" conceptlevel="4" concepttooltip="\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Vital Status\\Dead\\" concepttablename="CONCEPT_DIMENSION" conceptdimcode="\\Demo Data\\Sorlie(2003) GSE4382\\Subjects\\Vital Status\\Dead\\" conceptcomment="" normalunits="" setvaluemode="novalue" setvalueoperator="LT" setvaluehighlowselect="N" setvaluehighvalue="" setvaluelowvalue="" setvalueunits="" oktousevalues="N" setnodetype="alphaicon" visualattributes="LEAF,ACTIVE" applied_path="@" modifiednodepath="undefined" modifiednodeid="undefined" modifiednodelevel="undefined" class="panelBoxListItem x-tree-node-collapsed x-tree-node-leaf selected" conceptsetvaluetext="" conceptshortname="Dead" id="ext-gen193"><span class="x-tree-node-icon alphaicon"></span><span class="concept-text">Dead </span></div>'
};

document.getElementById('panelBoxList_0').innerHTML += TIMESERIES.ALIVE;
document.getElementById('panelBoxList_1').innerHTML += TIMESERIES.DEAD;
resultsTabPanel.setActiveTab('smartRPanel');

setTimeout(function() {
    var scope = angular.element($('#sr-index')).scope();
    scope.$apply(function() { scope.template = 'boxplot'; });
}, 1500);

setTimeout(function() {
    document.querySelector('#smartRPanel concept-box[type="LD-numerical"] .sr-drop-input').innerHTML += TIMESERIES.DATA;
}, 1600);

setTimeout(function() {
    document.querySelector('#smartRPanel fetch-button input').click();
    var interval = setInterval(function() {
        if (document.querySelector('#smartRPanel fetch-button span').innerHTML === 'Task complete! Go to the "Run Analysis" tab to continue.') {
            clearInterval(interval);
            document.querySelector('#smartRPanel .heim-tab[aria-controls="fragment-_run-_analysis"] a').click();
            setTimeout(function() {
                document.querySelector('#smartRPanel run-button input').click();
            }, 100);
        }
    }, 250);
}, 1700);

