// Select color input

var colorInput = document.getElementById("colorPicker");

// Select size input

var sizePicker = document.getElementById("sizePicker");
var submit = document.getElementById("submit");

// Select table

var table = document.getElementById("pixelCanvas")

//Call values

sizePicker.addEventListener("submit", function (form) {
    form.preventDefault();
    // Call makeGrid to create table
    makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Clear table
    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
    }
    // Get values
    var height = document.getElementById("inputHeight").value;
    if (height > 30) {
        var height = 30;
    };
    var width = document.getElementById("inputWidth").value;
    if (width > 80) {
        var width = 80;
    };
    // Number of rows
    for (var a = 0; a < height; a++){
        var row = table.appendChild(document.createElement('tr'));
        // Number of columns
        for (var b = 0; b < width; b++) {
            var column = row.appendChild(document.createElement('td'));
            column.addEventListener('click', paintCell);
        };
    };
};

// Funcion to paint cells when clicked

function paintCell() {
    var color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
}
