// Set-up Variables from the DOM

// Password Composition and Elements
var lengthEl = document.getElementById("length");
var upperCaseEl = document.getElementById("upperCase");
var lowerCaseEl = document.getElementById("lowerCase");
var numberCharEl = document.getElementById("numberChar");
var specialCharEl = document.getElementById("specialChar");

// Button Variable
var generateBtn = document.querySelector("#generate");

var getPasswordParameters = function () {
	var hasLength = lengthEl.value;
	var hasUpper = upperCaseEl.checked;
	var hasLower = lowerCaseEl.checked;
	var hasNumber = numberCharEl.checked;
	var hasSpecial = specialCharEl.checked;


};

// Write password to the #password input
function writePassword() {
	// Set password length and complexity

	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordParameters);
