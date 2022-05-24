let screen;
let buttonGrid;
let buttonGridBottom;

let totalRows = 5;
let buttonsPerRow = 4;

let buttonIndexTable = ["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-",
"1","2","3","+","0",".","<","="];
let operators = ["+","-","/","*"];

var isFirstValue = true;
var firstScreenValue = "0";
var secondScreenValue = "";

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
        var button = document.createElement("button");
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
    else if(buttonIndexTable[buttonIndex] === "AC")
    {
        button.onclick = function(){
            clearAll();
            displayScreenValue();
        }
    }
    else if(buttonIndexTable[buttonIndex] === "<")
    {
        button.onclick = function(){
            clearLast();
            displayScreenValue();
        }
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
    console.log("deleted last value");
    //TODO: Implement this!
}