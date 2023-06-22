var inputString = "";
var hasil = 0;

var displayNumOne = document.getElementById("display-num-1");
var displayNumTwo = document.getElementById("display-num-2");

function addString(str) {
	if (str === "C") {
		inputString = "";
		displayNumOne.innerText = "";
		displayNumTwo.innerText = "";
		return;
	} else if (str === "=") {
		calculate();
		return;
	}

	inputString += str;
	displayNumOne.innerText = inputString;
}

function calculate() {
	if (["x", "/", "+", "-"].includes(inputString[inputString.length - 1]))
		return;

	hasil = eval(inputString.replaceAll("x", "*"));
	displayNumTwo.innerText = hasil;
}
