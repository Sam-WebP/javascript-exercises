const palindromes = function (words) {
    //remove spaces and puncuation
    let modify = words.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "").toLowerCase();
    //calculate length of the string
    let totalLength = modify.length;
    let halfLength = (totalLength / 2);
    let oddLength = (totalLength) / 2 + 0.5;
    let test = totalLength % 2;
    let firstHalf = 0;
    let lastHalf = 0;
    //split the string in two parts down the middle
    if (totalLength % 2 == 0) {
        firstHalf = modify.substring(0, halfLength);
        lastHalf = modify.substring(totalLength, halfLength);
    } else {
        firstHalf = modify.substring(0, oddLength);
        lastHalf = modify.substring(totalLength, oddLength);
     //remove the last character off the first half
      firstHalf = firstHalf.slice(0,-1); 
    }
    //reverse the last half
      function reverseString(str) {
      let splitString = str.split("");
      let reverseArray = splitString.reverse();
      let joinArray = reverseArray.join("");
      return joinArray;
    }
    let reversed = reverseString(lastHalf);
    
    if(firstHalf === reversed) {
        return true;
    } else {
        return false;
    }
    
    
    }

//
//remove all spaces and puncuation for the words
//find the length of the words
//if the length of the words are odd then slice
//split the words half way 
//turn the second half so that it is reversed
//test to see if both the first half and second half are the same
//if they are the same then return true else return false


// Do not edit below this line
module.exports = palindromes;
