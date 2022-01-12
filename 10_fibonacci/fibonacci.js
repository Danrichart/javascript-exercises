const fibonacci = function(num) {

    if(Number(num) < 0) return "OOPS";

    let fibi = [];
    let fibiNum = 1;
    for (let x = 0; x < Number(num); x++ ){
        if(fibi.length < 2){
            fibi.push(fibiNum);
        } else {
            fibi.push(fibi[x-2]+fibi[x-1])
        }
    }
    return fibi.pop();
};

// Do not edit below this line
module.exports = fibonacci;
