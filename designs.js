// Select color input

var colorInput = document.getElementById("colorPicker");

// Select size input

var sizePicker = document.getElementById("sizePicker");
var pixelCanvas = document.getElementById("pixelCanvas");
var submit = document.getElementById("submit");

sizePicker.addEventListener("submit", function (form) {
    form.preventDefault();
    console.log('Form submit');
    var height = document.getElementById("inputHeight").value;
    console.log(height);
    var width = document.getElementById("inputWidth").value;
    console.log(width);
    var color = document.getElementById("colorPicker").value;
    console.log(color);
    makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    console.log("makeGrid called");

};
