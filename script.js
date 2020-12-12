

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Begins The Password Gen
function writePassword() {

  // check for password length
  var total = prompt("How long of a password would you like? (8-128 characters)");


  if (total < 8 || total > 128) {
    alert("Must be between 8 and 128 characters!")
    var total = prompt("How long of a password would you like? (8-128 characters)");
  }

  // confirms
  //var wantLowercase = confirm("Click 'OK' if you would like lowercase letters? (abc...)");
  //var wantUppercase = confirm("Click 'OK' if you would like uppercase letters? (ABC...)");
  //var wantNumeric = confirm("Click 'OK' if you would like numeric characters? (123...)");
  //var wantSpecial = confirm("Click 'OK' if you would like special characters? (!`$...)");


    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //var numerals = ["0","1","2","3","4","5","6","7","8","9"];
    //var specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","<",">","?",",",".","/","|"];




 // Generates Random Characters
    var password = [];
    var randomCharacters;


    for (var i = 0; i < total; i++) {
      var randomCharacters = lowercase[Math.floor(Math.random() * total)];
      password.push(randomCharacters);
      console.log(randomCharacters)
    }
    
  

    // prints password to html
    document.getElementById("password").innerHTML = password;




  }

  ;



