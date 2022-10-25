const sumAll = function(firstNumber, secondNumber) {

    let numbersBetween = []
    let numberSum = 0
    
    if (firstNumber <= -1 || secondNumber <= -1) {
            return "ERROR"
        } 

    else if (typeof firstNumber != "number" || typeof secondNumber != "number") {
            return "ERROR"
        }     
        
    else if(firstNumber > secondNumber) {
        for (let i = firstNumber; i >= secondNumber; i--) {
            numbersBetween.push(i)
            numberSum += i 
    } 
    return numberSum
    } 
    
    else if(firstNumber <= secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            numbersBetween.push(i)
            numberSum += i
    }
    return numberSum
    }
    };
    
    sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;