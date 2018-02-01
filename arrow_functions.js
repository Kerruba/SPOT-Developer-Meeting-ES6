// =============================
// 2. Arrow functions
// =============================

// Shorter syntax will make the code - ideally easier to read
// (param1, param2, ..., paramN) => { statements }
// (param1, param2, ..., paramN) => expression // equals to (param1, param2, ..., paramN) => return expression;

// Parentheses are optional when there's only one parameter name:
// (singleParam) => { statements }
// singleParam => { statements }

// A function with no parameters should be written in a pair of parentheses
// () =>  { statements }

var tasks = [
	{
		id: 1,
		completed: true,
		description: "Prepare slides for developer meeting",
		points: 2
	},
	{
		id: 2,
		completed: true,
		description: "Think about a topic for developer meeting",
		points: 1
	},
	{
		id: 3,
		completed: true,
		description: "Book a table at Red lion pub",
		points: 3
	},
	{
		id:4,
		completed: false,
		description: "Eat your developer meal",
		points: 2
	}
];

var completed = tasks.filter(function(task) {return task.completed});
console.log(completed);

// New arrow function
var toBeCompleted = tasks.filter(task => !task.completed);
console.log(toBeCompleted);

// map function
var allDescriptions = tasks.map(task => task.description);
console.log(allDescriptions);

// reduce function
var totalPoints = tasks.reduce((total, curr) => total+curr.points, 0);
console.log(totalPoints);

// The arrow function inherit the context from the outside 
function Prefixer(prefix) {
	this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) { // (A)
	'use strict';
	return arr.map(function (x) { // (B)
		// Doesn’t work:
		return this.prefix + x; // (C)
	});
};

var _ = new Prefixer("_");

_.prefixString("Hello world");
_.prefixArray(["Hello", "world"]); // Doesn't work

Prefixer.prototype.prefixArray = function (arr) {
	"use strict";
	var self = this;
	return arr.map(function (x) {
		return self.prefix + x;
	});
};


function PrefixerES6(prefix) {
	this.prefix = prefix;
}

PrefixerES6.prototype.prefixArray = function (arr) {
	'use strict';
	return arr.map( x => this.prefix + x);
}

var _ES6 = new PrefixerES6("_");
_ES6.prefixArray(["Hello", "world"]);

// *Bonus concepts*: class
// A new keyword for creating classes in Javascript. Syntactic sugar
class PrefixerClass {

	constructor(prefix) {
		this.prefix = prefix;
	}

	prefixArray(arr) {
		return arr.map( (x) => this.prefix + x);
	}

}
