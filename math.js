function Math(){}

Math.prototype.add = function(num1, num2){
 if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error("Parameters must be numbers")
 } 
    return num1 + num2
}

Math.prototype.multiply = function(num1, num2){
    return num1 * num2
}

Math.prototype.divide = function(num1, num2){
    return num1 % num2
}

Math.prototype.subtract = function(num1, num2){
    return num1 - num2
}
module.exports = Math

/* 
add divide function
- handle if the denominator is 0
- think about number of place values (ADV)

subtract function
 - handle negative numbers

 all functions
 - pass in an unlimited number of arguments
 (REST operator ...args)
 */