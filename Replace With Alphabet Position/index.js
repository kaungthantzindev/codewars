// Description:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//Best Practice
// function alphabetPosition(text) {
//     return text
//         .toUpperCase()
//         .match(/[a-z]/gi)
//         .map((c) => c.charCodeAt() - 64)
//         .join(' ');
// }

//My Solution
function alphabetPosition(text) {
    return text.toLowerCase().split('').filter(x => x >= 'a' & x <= 'z').map(y => y.charCodeAt(0) - 'a'.charCodeAt(0) + 1).join(' ');
}