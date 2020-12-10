//constants
const SYMBOL_CODES = arrChar(33, 47).concat(
  arrChar(58.64)
).concat(
  arrChar(91, 96)
).concat(
  arrChar(123, 126)
)
const NUM_CODES = arrChar(48, 57);
const LOWERCASE_CODES = arrChar(97, 122);
const UPPERCASE_CODES = arrChar(65, 90);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //user input
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  var hasSymbols;
  var hasNum;
  var hasLowerCase;
  var hasUpperCase;

  //password length check
  if (Number.isInteger(passwordLength)) {

    //password length at least 8 characters and no more than 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) {
      hasSymbols = confirm("Click 'OK' to confirm including special characters.");
      hasNum = confirm("Click 'OK' to confirm including numeric characters.");
      hasLowerCase = confirm("Click 'OK' to confirm including lowercase characters.");
      hasUpperCase = confirm("Click 'OK' to confirm including uppercase characters.")
    } else if (passwordLength < 8) {
      alert("Password length must be at least 8 characters");
    } else {
      alert("Password length must less than 129 characters");
    }
  } else {
    alert("Password length must be provided as a number");
  }

  //prep character code array based on user's criteria
  var arrCodes = [];
  if (hasSymbols) {
    arrCodes = arrCodes.concat(SYMBOL_CODES);
  }
  if (hasNum) {
    arrCodes = arrCodes.concat(NUM_CODES);
  }
  if (hasLowerCase) {
    arrCodes = arrCodes.concat(LOWERCASE_CODES);
  }
  if (hasUpperCase) {
    arrCodes = arrCodes.concat(UPPERCASE_CODES);
  }

  //generate password 
  var password = [];
  for (var i = 0; i < passwordLength; i++) {
    var randChar = arrCodes[Math.floor(Math.random() * arrCodes.length)];
    password.push(String.fromCharCode(randChar));
  }

  return password.join("");
}

function arrChar(low, high) {
  var arr = [];
  for (var i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
