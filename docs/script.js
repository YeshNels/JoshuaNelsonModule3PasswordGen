// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function that generates password starts with prompts confirming selections
function generatePassword() {
  var passwordLength = prompt("Please enter a password length from 8 to 128 characters");
  //Failure states for possible choices that do not follow the prompt requirements give an explanation of why they are failure states in the text box where the password is meant to appear.
  if (passwordLength > 128) {
    return "Please retry and enter a length below 128"
  }
  if (passwordLength < 8) {
    return "Please retry and enter a length above 8"
  }
  if (isNaN (passwordLength) === true) {
    return "Please enter a number in numerals when prompted for password length"
  }
  var passwordLowercase = confirm("Include lower case characters?");
  var passwordUppercase = confirm("Include upper case characters?");
  var passwordNumeric = confirm("Include numbers?");
  var passwordSpecial = confirm("Include special characters?");
  // Failure state for not including any characters in the password and explanation.
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false){
    return "Please retry and agree to include at least one of the types of characters"
  }
  //Using the character selection, set the characters that the password can draw from
  var character = ""
  //Start with an empty string and then add all character sets that have been accepted.
  if (passwordLowercase === true) {
    character += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (passwordUppercase === true) {
    character += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (passwordNumeric === true) {
    character += "1234567890"
  }
  //Using kludge to force acceptance of both quote marks and comma as special characters
  if (passwordSpecial === true) {
    character += " !#$%&()*+-./:;<=>?@[\]^_`{|}~'"
    character += '"'
    character += ","
  }
  //Actual randomly generated password from all of these options
  var actualPassword = ""
 for (let i = 0; i < passwordLength; i++) {
  random = Math.floor(Math.random() * character.length);
  actualPassword += character[random];
 }
 console.log(actualPassword);
 return actualPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
