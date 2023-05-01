// Assignment code here
function generatePassword() {
    // Define arrays of character types to include in password
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numericChars = "0123456789".split("");
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>/?".split("");

    // Prompt for password length
    let passwordLength = parseInt(prompt("How long should the password be? (8-128 characters)"));
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Please enter a valid password length between 8 and 128 characters"));
    }

    // Prompt for character types to include
    let includeLowercase = confirm("Do you want to include lowercase characters? [Cancel for No]");
    let includeUppercase = confirm("Do you want to include uppercase characters? [Cancel for No]");
    let includeNumeric = confirm("Do you want to include numeric characters? [Cancel for No]");
    let includeSpecial = confirm("Do you want to include special characters? [Cancel for No]");

    // Validate input and ensure at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("You must select at least one character type");
        return "";
    }

    // Generate password using selected character types
    let passwordChars = [];
    if (includeLowercase) {
        passwordChars = passwordChars.concat(lowercaseChars);
    }
    if (includeUppercase) {
        passwordChars = passwordChars.concat(uppercaseChars);
    }
    if (includeNumeric) {
        passwordChars = passwordChars.concat(numericChars);
    }
    if (includeSpecial) {
        passwordChars = passwordChars.concat(specialChars);
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
    }

    return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
