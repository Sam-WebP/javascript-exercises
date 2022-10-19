const repeatString = function(string, num) {
    if (num > 0 && num != 0) {
        let combined = [string]; 
        for (let i = 1; i < num; i++) {
        combined.push(string)
        }
        let noSpace = combined.join("")
        return noSpace
    } else if (num == 0) {
        return "";
    } else 
      return "ERROR"
    

};

// Do not edit below this line
module.exports = repeatString;
