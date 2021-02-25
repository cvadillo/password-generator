// Password Composition and Elements
var lengthEl = document.getElementById("length");
var upperCaseEl = document.getElementById("upper-case");
var lowerCaseEl = document.getElementById("lower-case");
var numberCharEl = document.getElementById("number-char");
var specialCharEl = document.getElementById("special-char");
var passwordDisplay = document.getElementById("password");

// Button Variable
var generateBtn = document.querySelector("#generate");

// Get the paramenters into a function to create the password
var parameterValidation = function () {
	// check which parameters the user wants
	var hasLength = lengthEl.value;
	var hasUpper = upperCaseEl.checked;
	var hasLower = lowerCaseEl.checked;
	var hasNumber = numberCharEl.checked;
	var hasSpecial = specialCharEl.checked;

	// Reset passwordString everytime the new function is ran
	passwordString = '';

	// Make sure the user has selected a valid number for their password.
	if (hasLength < 8) {
		alert("Please enter a number of characters for your password. The minimum is 8 and the maximum is 128.");
		return;
	}

	// Make sure the user has at least one parameter checked. If not, alert them
	if (!hasUpper && !hasLower && !hasNumber && !hasSpecial) {
		alert("You need to make at least one checkbox selection");
	}

	// Pass values to generator function.
	characterGenerator(hasLength, hasUpper, hasLower, hasNumber, hasSpecial);
};

var writePassword = function (length, string) {
	// Reset the final Password variable
	var finalPassword = '';

	// Create an array so we can shuffle the password
	var passArray = [];

	// Convert the string to an array and randomize
	var passArray = string.split('');
	passArray.sort(function() {
		return 0.5 - Math.random();
	});  

	// Recreate the string
	string = passArray.join('');                
	finalPassword = string.substr(0, length-1);

	passwordDisplay.textContent = finalPassword;
};



// Character Generator functions
var characterGenerator = function(length, upper, lower, number, special) {
	
	// Define the strings we're going to use to generate the password
	const letterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numberString = "0123456789"
	const specialString = "!@#$%^&*()-_+=<>,./?;:'[]{}|";
	var characterOutput = '';

	// Begin a for loop to fill up a string with values
	for (var i = 0; i < length; i++) {
		
		// Check the parameters and add to the characters
		if (upper) {
			characterOutput += letterString.charAt(Math.floor(Math.random() * letterString.length));
		}
		if (lower) {
			characterOutput += letterString.toLowerCase().charAt(Math.floor(Math.random() * letterString.length));
		}
		if (number) {
			characterOutput += numberString.charAt(Math.floor(Math.random() * numberString.length));
		}
		if (special) {
			characterOutput += specialString.charAt(Math.floor(Math.random() * specialString.length));
		}
	}
	// Pass the output to the writePassword function
	writePassword(length, characterOutput);
};


// Add event listener to generate button
generateBtn.addEventListener("click", parameterValidation);
