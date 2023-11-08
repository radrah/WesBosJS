// Hoisting

// console.log(age);
// var age = 10; // Cant run because value in variable isnt hoisted

console.log('Hoisting works');

sayHi();

function sayHi() {
    console.log('HII', add(10, 2));
} // Can run this function before declaring it because of hoisting

function add(a, b) {
    return a + b;
} // accessible in sayHi() due to hoisting

