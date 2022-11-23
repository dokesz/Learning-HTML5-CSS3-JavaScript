var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function bodyStyle(value1, value2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ value1 
	+ ", " 
	+ value2 
	+ ")";
}

function setGradient() {
	bodyStyle(color1.value, color2.value);

	textContent();
}

function hexGenerator(){
	var hexcode = "";
	var hexValues = "0123456789abcdef"

	for (let i = 0; i < 6; i++) {
		hexcode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
	}
	return hexcode;
}

function randomBackground(){
	bodyStyle("#" + hexGenerator(), "#" + hexGenerator());

	textContent();
}

function textContent(){
	css.textContent = body.style.background + ";";
}

setGradient();

textContent();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener('click', randomBackground)

