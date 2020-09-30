// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Found array of uppercase and lowercase characters at https://gist.github.com/bendc/1e6af8f2d8027f2965da also, I decided to only include common and easy to read password special characters and not, for instance, math special characters or special characters only accessible by alt code.
  
  var characters = {capital: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbol: ["~", "!", "@", "#", "$", "%", "&", "?"]
    };
  var theActualPassword = ""
  var passwordLength = prompt("How long do you want your password to be?", "8 to 128 characters please");
  while(isNaN(passwordLength*0)){
    passwordLength = prompt(" Please only input numbers!", "Password Length");
    passwordLength = Number(passwordLength);
    while(passwordLength < 8 || passwordLength > 128){
      passwordLength = prompt ("Only numbers from 8 to 128 please!", "Password Length");
      passwordLength = Number(passwordLength);
    };
    };
  var useCaps = confirm('Would you like to use capital letters in your password? Press "OK" for yes, and "Cancel" for no.');
  var useLowercase = confirm('Would you like to use lowercase letters in your password? Press "OK" for yes, and "Cancel" for no.');
  var useNumbers = confirm('Would you like to use numbers in your password? Press "OK" for yes, and "Cancel" for no.');
  var useSymbols = confirm('Would you like to use symbols in your password? Press "OK" for yes, and "Cancel" for no.');
  if (useCaps+useLowercase+useNumbers+useSymbols === 0) {
    var charactersWarning = alert("You must use at least one type of characters!");
    return
  }
  if (useCaps === false) {
    delete characters.capital
  };
  if (useLowercase === false) {
    delete characters.lowercase
  };
  if (useNumbers === false) {
    delete characters.number
  };
  if (useSymbols === false) {
    delete characters.symbol
  };
  // building the password
  for (var i=0; i<(length.passwordLength); i++) {
    var rngType = Math.floor(Math.random() * length.characters);
    var rngSpot = Math.floor(Math.random() * length.characters[rngType]);
    theActualPassword = theActualPassword.push(characters[rngType][rngSpot])
  }
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
