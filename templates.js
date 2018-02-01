// Template literals are string literals that can stretch across multiple lines 
// and include interpolated expressions (inserted via ${···}):

var name = "Luca";
var surname = "Cherubin";

// ES5
var fullname = name + " " + surname;

// ES6 - Template literals
// var es6_fullname = `${name} ${surname}`;

// Even more complex
// var some_html = `
// <div>
//     <div class="name">${name}</div>
//     <div class="surname">${surname}</div>
// </div>
// `;
// console.log(some_html);

function myTag(strings, personExp, ageExp) {

    var str0 = strings[0]; // "that "
    var str1 = strings[1]; // " is a "

    // There is technically a string after
    // the final expression (in our example),
    // but it is empty (""), so disregard.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;

}

var person = 'Mike';
var age = 28;

console.log(myTag`that ${person} is a ${age}`);

function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        if (values[i]) {
           str += `${string}<span class='hl'>${values[i] || ''}</span>`; 
           return;
        }
        str += `${string}`
    });
    return str;
}

console.log(highlight`I think ${person} is a really cool person at ${age} years old`);
