const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0) return "ERROR";

    if (start > end ){
        const temp = start;
        start = end;
        end = temp;
    }
    
    
    let total = 0;
    
    for(let x = start; x <= end; x++) {
        total += x;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
