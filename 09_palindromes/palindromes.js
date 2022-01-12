const palindromes = function (word) {
    let saniWord = word.toLowerCase().replace(/[^\w]/g,""); 
    let result = saniWord.split("").reverse().join('');
    return (result == saniWord)

};

// Do not edit below this line
module.exports = palindromes;
