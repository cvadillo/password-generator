// Set-up Variables from the DOM

// Password Composition and Elements
var lengthEl = document.getElementById("length");
var upperCaseEl = document.getElementById("upperCase");
var lowerCaseEl = document.getElementById("lowerCase");
var numberCharEl = document.getElementById("numberChar");
var specialCharEl = document.getElementById("specialChar");
var passwordDisplay = document.getElementById("password");

// Button Variable
var generateBtn = document.querySelector("#generate");

// Create an object to store the random characters generated for each of the cases the user can pick
var randomCharacters = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// Get the paramenters intp a function to create the password
var getPasswordParameters = function () {
	// check which parameters the user wants
	var hasLength = lengthEl.value;
	var hasUpper = upperCaseEl.checked;
	var hasLower = lowerCaseEl.checked;
	var hasNumber = numberCharEl.checked;
	var hasSpecial = specialCharEl.checked;

	// Make sure the user has at least one parameter checked. If not, alert them
	if (!hasUpper && !hasLower && !hasNumber && !hasSpecial) {
		alert("You need to make at least one checkbox selection");
	}

	// We know the length, we know what parameters the user wants, time to build the password.
	writePassword(hasLower, hasUpper, hasNumber, hasSpecial, hasLength);

};

// Generate the password
function writePassword(lower, upper, number, symbol, length) {
	// Initialize the password variable and set it to nothing
	var password = "";

	// Filter the types that the user wants
	var parameterCount = lower + upper + number + symbol;
	var parametersArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	// Generate the characters for each parameter in a loop
	for (var i = 0; i < length; i += parameterCount) {
		parametersArray.forEach(type=> {
			var funcName = Object.keys(type[0]);
			writePassword += randomCharacters[funcName]();
		});
	}
	var passwordText = writePassword.slice(0, length);
	return passwordText;
	passwordDisplay.value = passwordText;

};

// Generate a random Lowercase Letter
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generate a random Uppercase Letter
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generate a random number
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generate a random symbol
function getRandomSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordParameters);