// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // check for password length
 var total = prompt("How long of a password would you like? (8-128 characters)");
  console.log(total);

  // chedk for lowercase letters
  var wantLowercase = confirm("Click 'OK' if you would like lowercase letters? (abc...)");
  if (wantLowercase == true) {
    console.log("wants lowercase characters")
  }

  //check for uppercase letters
  var wantUppercase = confirm("Click 'OK' if you would like uppercase letters? (ABC...)");
  if (wantUppercase == true) {
    console.log("wants uppercase characters")
  }

  //check for numeric characters
  var wantNumeric = confirm("Click 'OK' if you would like numeric characters? (123...)");
if (wantNumeric == true) {
  console.log("wants numeric characters")
}

//check for special characters
  var wantSpecial = confirm("Click 'OK' if you would like special characters? (!`$...)");
  if (wantSpecial == true) {
    console.log("wants special characters")
  }
  
// characters
// var lowercase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
// var uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var numerals = [0,1,2,3,4,5,6,7,8,9];

var randomNumerals = numerals[Math.floor(Math.random()*numerals.length)];
console.log(randomNumerals)

//var specials = [~,`,!,@,#,$,%,^,&,*,(,),_,+,-,=,{,},[,],:,",;,\,',<,>,?,,,.,/,|,\,\];


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




