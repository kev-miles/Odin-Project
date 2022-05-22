let buttonGrid;
let buttonGridBottom;

let totalRows = 5;
let buttonsPerRow = 4;

function initialize() {
    generateButtons();
}

function generateButtons() {
    buttonGrid = document.getElementById("button-grid");
    buttonGridBottom = document.getElementById("button-grid-bottom");
    console.log(buttonGrid);
    console.log("Generating grid...")
    for(let i=0; i<totalRows*buttonsPerRow; i++)
    {
        var cell = document.createElement("div");
        var button = document.createElement("button");
        button.textContent = i;
        buttonGrid.appendChild(cell);
        cell.appendChild(button).className = assignButtonClass(i);
    }
}

function assignButtonClass(index)
{
    return (index < 3 
        ? "top-button" 
        : (index % 2 === 0 || index % 3 === 0 && index != 3) 
            ? "reg-button" 
            : "side-button");
}