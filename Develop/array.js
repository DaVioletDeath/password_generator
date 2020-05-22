var fromPrompt = prompt("Select a number 8 through 128");
var totalCharacters = parseInt(fromPrompt);

console.log(totalCharacters);

var typesOfCharacters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    specialCharacters: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~",
}

var useLowerCase = confirm("Use Lowercase?");
var useUpperCase = confirm("Use Uppercase?");
var useSymbols = confirm("Use Symbols?");
var useNumbers = confirm("Use Numbers?");

console.log("L: ", useLowerCase);
console.log("U: ", useUpperCase);
console.log("S: ", useSymbols);
console.log("N ", useNumbers);

var possibleCharacters = [];

if (useLowerCase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.split(""));
}
if (useUpperCase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.toUpperCase().split(""));
}
if (useSymbols) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
}
if (useNumbers) {
    for (var i = 0; i < 10; i++) {
        possibleCharacters.push(i);
    }
}

console.log(possibleCharacters);

var password = "";

for (var i = 0; i < totalCharacters; i++) {
   var position = Math.floor(Math.random() * possibleCharacters.length);
   password = password + possibleCharacters[position];
}

document.write(password);

console.log(password);