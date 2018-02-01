
// We wont to concatenate a not predefined number of strings
var result = concat('this', 'was', 'no', 'fun')
console.log(result) // <- 'this was no fun'

// ES5
function concat() {
    return Array.prototype.slice.call(arguments).join(' ')
}


//The rest parameters syntax enables you to pull a real Array out of the function's arguments 
//by adding a parameter name prefixed by ...
function es6_concat(...words) {
    return words.join(' ');
}

/**
 * - Rest parameter gets all the arguments passed to the function call
 * - Each time a parameter is added on the left, it’s as if its value is assigned by calling rest.shift()
 * - Note that you can’t actually place parameters to the right: rest parameters can only be the last argument
 */

// WHY Rest is better than arguments
 
function sum() {
    var numbers = Array.prototype.slice.call(arguments) // numbers gets all arguments
    var multiplier = numbers.shift()
    var base = numbers.shift()
    var sum = numbers.reduce((accumulator, num) => accumulator + num, base)
    return multiplier * sum
}
var total = sum(2, 6, 10, 8, 9)
console.log(total)
// <- 66

 function es6_sum(multiplier, base, ...numbers) {
    var sum = numbers.reduce((accumulator, num) => accumulator + num, base)
    return multiplier * sum;
 }

 var total = sum(2, 6, 10, 8, 9)
console.log(total)
// <- 66

//==================================
// SPREAD OPERATOR
//==================================
console.log(1, 2, 3)

var arr = [1,2,3];
console.log(arr); // [1,2,3]

// I want to log each member of the array
console.log.apply(console, arr);

// Transform a node list to a list of nodes
[...document.querySelectorAll('div')];

// Log all div with a style associated
console.log(document.querySelectorAll('div[style]'));


// Even in the middle of something else, to unwrap an array
console.log(1, ...[2, 3, 4], 5) // becomes `console.log(1, 2, 3, 4, 5)`
// <- '1 2 3 4 5'
