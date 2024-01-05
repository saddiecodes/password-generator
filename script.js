// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var passwordLength = parseInt(prompt("How long do you want the password to be? It needs to be betweeen 8 and 128 characters."));

if (Number.isNaN(passwordLength)){
  alert("The length entered must be a number.");
  return getPasswordOptions; 
}

if (passwordLength < 8 || passwordLength > 128){
  alert ("Password length is not between 8 and 128 characters.");
  return getPasswordOptions;
}

var includeSpecial = confirm("Do you want to include special characters?");
var includeUpper = confirm("Do you want to include upper case characters");
var includeNumbers = confirm("Do you want to include numbers?");
var includeLower = confirm("Do you want to include lower case characters?"); 
if (!includeSpecial&& !includeUpper&& !includeNumbers&& !includeLower){
  alert ("Choose at least one of the character types stated.");
  return getPasswordOptions;
}

var userOptions = {
  length: passwordLength,
  includeSpecial: includeSpecial, 
  includeUpper: includeUpper,
  includeNumbers: includeNumbers,
  includeLower: includeLower, 
}

return userOptions
}

// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random()* arr.length);
var randomElement = arr[randomIndex];
return randomElement; 
}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);