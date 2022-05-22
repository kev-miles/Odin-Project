let buttonGrid;
let buttonGridBottom;

let totalRows = 5;
let buttonsPerRow = 4;

function initialize() {
    generateButtons();
}

function generateButtons(){
    buttonGrid = document.getElementById("button-grid");
    buttonGridBottom = document.getElementById("button-grid-bottom");

    buttonGrid.style.setProperty("--grid-rows", totalRows);
    buttonGrid.style.setProperty("--grid-cols", buttonsPerRow);

    for(let i=0; i<(totalRows*buttonsPerRow); i++){
        let button = document.createElement("button");
        button.textContent = i+1;
        buttonGrid.appendChild(button).className = assignButtonClass(i+1);
    }
}

function assignButtonClass(index)
{
    return (index <= 3 
        ? "top-button" 
        : (index % 4 === 0) 
            ? "side-button" 
            : "reg-button");
}