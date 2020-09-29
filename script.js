// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = []
function generatePassword(){
  // Found array of uppercase and lowercase characters at https://gist.github.com/bendc/1e6af8f2d8027f2965da also, I decided to only include common and easy to read password special characters and not, for instance, math special characters or special characters only accessible by alt code.
  characters = {capital:
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], lowercase:
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], number:
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], symbol:
  ["~", "!", "@", "#", "$", "%", "&", "?"]
  }
  var passwordLength = prompt("How long do you want your password to be?", "8 to 128 characters please")
  // passwordLength = Number(passwordLength)
  while(isNaN(passwordLength*0)){
    passwordLength = prompt(" Please only input numbers!", "Password Length")
    passwordLength = Number(passwordLength)
    while(passwordLength < 8 || passwordLength > 128){
      passwordLength = prompt ("Only numbers from 8 to 128 please!", "Password Length")
      passwordLength = Number(passwordLength)
    }
    }
    console.log(typeof passwordLength)
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
