/* eslint-disable no-unused-vars */
// Scope

console.log('it works');
const first = 'wes';

let second = 'bos';
// var age = 100; // Good idea not use var so it isnt a global variable and cant be accessed everywhere

function sayHi() {
    console.log('hi!');
}

let age = 100;

function go() {
    age = 300
    const hair = 'blonde'; // This variable is not available outside this function, only within it.
    console.log(age); // This variable is updated and is availabe inside the function though 
                    // it was declared outside. It logs the updated value now
}
go();[]


function isCool(name){
    let cool;
    if (name === 'wes') {
        cool = true; // using var will allow the variable to be available outside the block 
    // can can be accessed from outside the function
    }
    console.log(cool);
    return cool;
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

// Ideally dont use  var due to the global variable leaking, use LET OR CONST instead

const dog = 'snickers';

function logDog(dog) {
    console.log(dog);
}

function go(){
    const dog = 'sunny';
    logDog('RUFUS');
}

go();

function sayHello(name) {
    function yell() {
        console.log(name.toUpperCase());
    }
    yell();
}

sayHello('wes'); // Yell() isnt available outside the sayHello() function