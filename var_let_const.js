function print(something) {
	console.log(something);
}

// This will print number 1-10
for (var i=0; i<10; i++) {
	console.log(i);
}

// -------------

// Print 10 times 10;
for (var i=0; i<10; i++) {
	setTimeout(function() { console.log(i) }, 1000);
}

// Var has a function scope, meaning that it is known at level of the function (in this case the program)
// Let validity is just a block of scope within curly braces

// Prints number from 0 to 9 correctly
for (let i=0; i<10; i++) {
	setTimeout(function() {console.log(i)}, 1000);
}

// aVar doesn't exist outside of the brakets
for (let aVar=0; aVar<10; aVar++) {
	console.log(aVar);
}

console.log(aVar);

// Const is similar to let - block scoped. The value of a constant cannot change through re-assignment, and it can't be redeclared.
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42
