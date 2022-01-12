const repeatString = function(string, num) {
    let newString = "";
    let x = 0;
    if (num < 0) {
        return 'ERROR';
    }else {
        while (x < num){
            newString += string;
            x++;
        }
        return newString;
    }  
};

// Do not edit below this line
module.exports = repeatString;
