// Select color input

var colorInput = document.getElementById("colorPicker"); // Color field

// Select size input

var sizePicker = document.getElementById("sizePicker"); // Both table size fields
var submit = document.getElementById("submit"); // Submit button

// Select table

var table = document.getElementById("pixelCanvas") // Table

// Update table when submit is clicked

sizePicker.addEventListener("submit", function (form) {
    form.preventDefault();
    // Call makeGrid to create table
    makeGrid();
});

// Function to create the grid according to dimensions input by user

function makeGrid() {
    // Clear table
    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
    }
    // Get values
    var height = document.getElementById("inputHeight").value; // Height form
    if (height > 30) {
        var height = 30;
    };
    var width = document.getElementById("inputWidth").value; // Width form
    if (width > 80) {
        var width = 80;
    };
    // Number of rows
    for (var a = 0; a < height; a++){
        var row = table.appendChild(document.createElement('tr')); // Add new rows
        // Number of columns
        for (var b = 0; b < width; b++) {
            var column = row.appendChild(document.createElement('td')); // Add columns within row
            column.addEventListener('click', paintCell); // Listen for clicks on each new cell
        };
    };
};

// Funcion to paint cells when clicked

function paintCell() {
    var color = document.getElementById("colorPicker").value; // Get color from color picker
    event.target.style.backgroundColor = color; // Change background color of clicked cell
}
