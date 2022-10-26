const leapYears = function(year) {

if(year % 4 == 0 && (year % 100 == 0 && year % 400 != 0)) {
        return false
} else if(year % 4 == 0 && (year % 100 == 0 && year % 400 == 0)) {
        return true
} else if(year % 4 == 0 && (year % 100 != 0)) {
    return true
} else {
    return false
}
};

// Do not edit below this line
module.exports = leapYears;


//Leap Years are: 
//Divisible by 4
//Not devisible 100 unless it is divisable by 400 
//

/*
const leapYears = function(year) {

if(year % 4 == 0) {
    if(year % 100 == 0 && year % 400 != 0)
        return false
} else if(year % 4 == 0) {
    if(year % 100 == 0 && year % 400 == 0)
        return true
} else if(year % 4 == 0) {
    if(year % 100 != 0)
    return true
} else {
    return false
}
}; */