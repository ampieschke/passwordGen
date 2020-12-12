// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // check for password length
 var total = prompt("How long of a password would you like? (8-128 characters)");
  console.log(total);
  
if (total < 8 || total >128) {
alert("Must be between 8 and 128 characters!")
var total = prompt("How long of a password would you like? (8-128 characters)");
  console.log(total);
}

// variables
  var wantLowercase = confirm("Click 'OK' if you would like lowercase letters? (abc...)");
  var wantUppercase = confirm("Click 'OK' if you would like uppercase letters? (ABC...)");
  var wantNumeric = confirm("Click 'OK' if you would like numeric characters? (123...)");
  var wantSpecial = confirm("Click 'OK' if you would like special characters? (!`$...)");

  
// characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numerals = ["0","1","2","3","4","5","6","7","8","9"];
var specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","<",">","?",",",".","/","|"];

var randomNumerals = numerals[Math.floor(Math.random()*numerals.length)];
console.log(randomNumerals)

var completePassword = (lowercase[Math.floor(Math.random() * lowercase.length)]);
console.log(completePassword) + (uppercase[Math.floor(Math.random() * uppercase.length)]);
console.log(completePassword) + (numerals[Math.floor(Math.random() * numerals.length)]);
console.log(completePassword) + (specials[Math.floor(Math.random() * specials.length)]);
console.log(completePassword)




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var completePassword = "";


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




