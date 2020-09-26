// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  // Found array of uppercase and lowercase characters at https://gist.github.com/bendc/1e6af8f2d8027f2965da also, I decided to only include common and easy to read password special characters and not, for instance, math special characters or special characters only accessible by alt code.
  var characters = [
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["~", "!", "@", "#", "$", "%", "&", "?"]
  ]

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
