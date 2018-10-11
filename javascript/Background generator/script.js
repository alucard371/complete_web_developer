var _ = require('lodash');

console.log(_);
let css = document.querySelector("h3");
let col1 = document.querySelector(".color1");
let col2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.querySelector(".genrate");

// copied form the internet
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

body.onload = function() {
  col1.setAttribute("value", getRandomColor());
  col2.setAttribute("value", getRandomColor());
  body.style.background =
    "linear-gradient(to right, " + col1.value + " , " + col2.value + ")";
  css.textContent = body.style.background + ";";
}

function genNewColor() {
  col1.setAttribute("value", getRandomColor());
  col2.setAttribute("value", getRandomColor());
  body.style.background =
    "linear-gradient(to right, " + col1.value + " , " + col2.value + ")";

  css.textContent = body.style.background + ";";
}

function addColor() {
  body.style.background =
    "linear-gradient(to right, " + col1.value + " , " + col2.value + ")";

  css.textContent = body.style.background + ";";
}

col1.addEventListener("input", addColor);
col2.addEventListener("input", addColor);
random.addEventListener("click", genNewColor);