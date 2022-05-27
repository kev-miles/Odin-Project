let screen;
let buttonGrid;
let buttonGridBottom;

let totalRows = 5;
let buttonsPerRow = 4;

let buttonIndexTable = ["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-",
"1","2","3","+","0",".","<","="];


let isFirstValue = true;
let firstScreenValue = "0";
let secondScreenValue = "";
let operationToExecute = -1;

let funcDirectory = {
    "AC": function(){clearAll(); displayScreenValue();},
    "<": function(){ clearLast(); displayScreenValue();},
    ".": function(){ isFirstValue? firstScreenValue + "." : secondScreenValue + "."; displayScreenValue();},
    "+": function(){ isFirstValue = false; operationToExecute = 0; displayScreenValue();},
    "*": function(){ isFirstValue = false; operationToExecute = 1; displayScreenValue();},
    "-": function(){ isFirstValue = false; operationToExecute = 2; displayScreenValue();},
    "/": function(){ isFirstValue = false; operationToExecute = 3; displayScreenValue();},
    "=": function(){ operate();}
  };

function initialize() {
    getDocumentElements();
    generateButtons();
    clearAll();
}

function getDocumentElements() {
    screen = document.getElementById("screen");
    buttonGrid = document.getElementById("button-grid");
    buttonGridBottom = document.getElementById("button-grid-bottom");
}

function clearAll() {
    isFirstValue = true;
    firstScreenValue = "0";
    secondScreenValue = "";
    displayScreenValue();
}

function displayScreenValue() {
    screen.textContent = (isFirstValue ? firstScreenValue : secondScreenValue);   
}

function generateButtons(){
    buttonGrid.style.setProperty("--grid-rows", totalRows);
    buttonGrid.style.setProperty("--grid-cols", buttonsPerRow);

    for(let i=0; i<(totalRows*buttonsPerRow); i++){
        let button = document.createElement("button");
        assignButtonText(button, i);
        assignButtonEvents(button, i)
        assignButtonClass(button, i+1);
        buttonGrid.appendChild(button);
    }
}

function assignButtonText(button, buttonIndex)
{
    button.textContent = buttonIndexTable[buttonIndex];
}

function assignButtonClass(button, buttonIndex)
{
    (buttonIndex <= 3 
    ? button.className = "top-button" 
    : (buttonIndex % 4 === 0) 
        ? button.className = "side-button" 
        : button.className = "reg-button");
}

function assignButtonEvents(button, buttonIndex)
{
    if(buttonIsNumber(buttonIndex))
    {
        button.onclick = function(){
            concatenateButtonValueToScreenValue(button.textContent)
            displayScreenValue(); 
        };
    }
    else
    {
        button.onclick = funcDirectory[buttonIndexTable[buttonIndex]];
    }
}

function buttonIsNumber(buttonIndex)
{
    return (!isNaN(Number(buttonIndexTable[buttonIndex])));
}

function concatenateButtonValueToScreenValue(valueToConcatenate)
{
    if(valueToConcatenate === "0" && firstScreenValue === "0")
        return;
    
    if(firstScreenValue === "0")
        firstScreenValue = "";

    (isFirstValue 
        ? firstScreenValue = firstScreenValue + valueToConcatenate
        : secondScreenValue = secondScreenValue + valueToConcatenate);
}

function clearLast(){
    isFirstValue 
    ? firstScreenValue = firstScreenValue.substring(0, firstScreenValue.length-1)
    : secondScreenValue = secondScreenValue.substring(0,secondScreenValue.length-1);

    if(firstScreenValue === "")
        firstScreenValue = "0";
    
    if(!isFirstValue && secondScreenValue === "")
        secondScreenValue = "0";
}

function operate()
{
    switch(operationToExecute) {
        case 0:
            displayOperationResultOnScreen(add());
          break;
        case 1:
            displayOperationResultOnScreen(mul());
            break;
        case 2:
            displayOperationResultOnScreen(sub());
            break;
        case 3:
            displayOperationResultOnScreen(div());
            break;
      }
}

function displayOperationResultOnScreen(result) {
    isFirstValue = true;
    firstScreenValue = ""+result;
    secondScreenValue = "";
    displayScreenValue();
}

function add(){
    return Number(firstScreenValue) + Number(secondScreenValue);
}
function mul(){
    return Number(firstScreenValue) * Number(secondScreenValue);
}
function sub() {
    return Number(firstScreenValue) - Number(secondScreenValue);
}
function div() {
    return Number(firstScreenValue) / Number(secondScreenValue);
}
