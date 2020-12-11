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

//set password length range and number input synchronously
var passwordLengthRange = id("password-length");
var passwordLengthNum = id("password-length-num");

passwordLengthRange.addEventListener("input", syncPasswordLength);
passwordLengthNum.addEventListener("input", syncPasswordLength);

function syncPasswordLength(e) {
  var value = e.target.value;
  passwordLengthRange.value = value;
  passwordLengthNum.value = value;
}

//user input
var symbols = id("has-symbol");
var num = id("has-num");
var lowercase = id("has-lowercase");
var uppercase = id("has-uppercase");

//Add event listener to generate button and prevent refreshing the page 
var generateBtn = qs("#generate");
generateBtn.addEventListener("click", e => {
  e.preventDefault();
  var passwordLength = passwordLengthNum.value;
  var hasSymbols = symbols.checked;
  var hasNum = num.checked;
  var hasLowerCase = lowercase.checked;
  var hasUpperCase = uppercase.checked;
  var password = generatePassword(passwordLength, hasSymbols, hasNum, hasLowerCase, hasUpperCase);
  var passwordText = qs("#password");

  passwordText.value = password;
});

function generatePassword(passwordLength, hasSymbols, hasNum, hasLowerCase, hasUpperCase) {

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


/** ------------------------------ Helper Functions  ------------------------------ */
  /**
   * Note: You may use these in your code, but remember that your code should not have
   * unused functions. Remove this comment in your own code.
   */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }