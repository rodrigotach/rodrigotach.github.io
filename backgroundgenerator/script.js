var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var btn = document.querySelector("button");


function setGradient () {
	
	setBackground(body);
	setBackground(btn);
	css.textContent = body.style.background + ";";
}

function randomValue () {
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomValue);


//** Auxiliar Functions **//
//----------------------------------------------
//Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

//Function to set the gradient background of an object passed as a parameter
function setBackground (obj) {
	obj.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}
