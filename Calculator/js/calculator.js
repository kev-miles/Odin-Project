let screen;
let buttonGrid;
let buttonGridBottom;

let totalRows = 5;
let buttonsPerRow = 4;

let buttonIndexTable = ["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-",
"1","2","3","+","0",".","<","="];

var isFirstValue = true;
var firstScreenValue = "0";
var secondScreenValue = "0";

function initialize() {
    screen = document.getElementById("screen");
    generateButtons();
    clearAll();
}

function clearAll() {
    isFirstValue = true;
    firstScreenValue = "0";
    secondScreenValue = "0";
    displayScreenValue();
}

function displayScreenValue() {
    screen.textContent = (isFirstValue ? firstScreenValue : secondScreenValue);   
}

function generateButtons(){
    buttonGrid = document.getElementById("button-grid");
    buttonGridBottom = document.getElementById("button-grid-bottom");

    buttonGrid.style.setProperty("--grid-rows", totalRows);
    buttonGrid.style.setProperty("--grid-cols", buttonsPerRow);

    for(let i=0; i<(totalRows*buttonsPerRow); i++){
        var button = document.createElement("button");
        button.textContent = assignButtonText(i);
        assignButtonEvents(button, i)
        buttonGrid.appendChild(button).className = assignButtonClass(i+1);
    }
}

function assignButtonText(buttonIndex)
{
    return buttonIndexTable[buttonIndex];
}

function assignButtonClass(buttonIndex)
{
    return (buttonIndex <= 3 
        ? "top-button" 
        : (buttonIndex % 4 === 0) 
            ? "side-button" 
            : "reg-button");
}

function assignButtonEvents(button, buttonIndex)
{
    if(buttonIsNumber(buttonIndex))
    {
        button.onclick = concatenateButtonValueToScreenValue(button.textContent);
    }
}

function buttonIsNumber(buttonIndex)
{
    return (!isNaN(Number(buttonIndexTable[buttonIndex])));
}

function concatenateButtonValueToScreenValue(valueToConcatenate)
{
    console.log("concatenating..." + valueToConcatenate);

    if(isFirstValue)
        firstScreenValue = firstScreenValue + valueToConcatenate;
    else
        secondScreenValue = secondScreenValue + valueToConcatenate;

    displayScreenValue();
}