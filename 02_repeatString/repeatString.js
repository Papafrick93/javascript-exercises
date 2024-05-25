const repeatString = function(string, numOfRepeats) {
    let resultString = ''
    
    if (numOfRepeats < 0) {
        return resultString = 'ERROR';
    }

    for (let i = 0; i < numOfRepeats; i++) {
        resultString += string;
    }
    
    return resultString ;
};

// Do not edit below this line
module.exports = repeatString;
