// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  prompt ("How long of a password would you like? (8-128 characters)")
  prompt ("Would you like lowercase letters? (abc...)")
  prompt ("Would you like uppercase letters? (ABC...)")
  prompt ("Would you like numeric characters? (123...)")
  prompt ("Would you like special characters? (!`$...)")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// characters
// abcdefghijklmnopqrstuvwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 0123456789
// ~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\
