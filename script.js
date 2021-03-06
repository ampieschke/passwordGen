// Assignment Code
var generateBtn = document.querySelector("#generate");

// Event listener
generateBtn.addEventListener("click", prompt_user_for_input);


// Function to Collect User Input
function prompt_user_for_input() {


  // check for password length
  var number = prompt("How long of a password would you like? (8-128 characters)");

  while (number < 8 || number > 128) {
    alert("Must be between 8 and 128 characters!")
    var number = prompt("How long of a password would you like? (8-128 characters)");
  }
  console.log(number);


  // confirm characters to include
  var wantLowercase = confirm("Click 'OK' if you would like lowercase letters? (abc...)");
  var wantUppercase = confirm("Click 'OK' if you would like uppercase letters? (ABC...)");
  var wantNumeric = confirm("Click 'OK' if you would like numeric characters? (123...)");
  var wantSpecial = confirm("Click 'OK' if you would like special characters? (!`$...)");


  //set parameters for writing password
  writePassword({ number, wantLowercase, wantUppercase, wantNumeric, wantSpecial })

}
// Begins The Password
function writePassword(params) {

  // available characters
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", "<", ">", "?", ",", ".", "/", "|"];


  //stores selected characters
  var selectedCharacters = [];


  //check for confirmed character types and add them to the selected characters
  if (params.wantLowercase == true) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }
  if (params.wantUppercase == true) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }
  if (params.wantNumeric == true) {
    selectedCharacters = selectedCharacters.concat(numerals);
  }
  if (params.wantSpecial == true) {
    selectedCharacters = selectedCharacters.concat(specials);
  }
  console.log(selectedCharacters);
  if (selectedCharacters == "") {
    alert("No Character Sets Selected. Please Restart.")
  }

  //stores generated random characters
  var password = "";

  //generate random numbers based on selection
  for (var i = 0; i < params.number; i++) {
    password = password + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  };
  console.log(password);

  // prints password to html
  document.getElementById("password").innerHTML = password;
}




