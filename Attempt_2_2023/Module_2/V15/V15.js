/* eslint-disable no-unused-vars */
// Different ways  to declare functions

// Classic function declaration - Hoisted
function doctorize1(firstName) {
	return `Dr. ${firstName}`;
}

// Anonymous Function
// function (firstName) {
//     return `Dr. ${firstName}`
// }

// Function Expression - Not hoisted
const doctorize2 = function(firstName) {
	return `Dr. ${firstName}`;
};

// Hoisted function - when function is declared with the word 'function' in the beginning, the function 
// is available to use before it initialization
function doctorize3(firstName) {
	return `Dr.${firstName}`;
}

// Arrow functions
const doctorize4 = (firstName) => {
	return `Dr.${firstName}`;
};

const inchToCM1 = (inches) => {
	return inches * 2.54;
};

// Implicit return Function
const inchToCM2 = (inches) => inches * 2.54;

const inchToCM3 = inches => inches * 2.54;

console.log(inchToCM1(2));
console.log(inchToCM2(4));
console.log(inchToCM3(6));

const add = (a, b = 3) => a + b;
console.log(add(2));

const makeABaby1 = (first, last, age) => {
	const baby = {
		name: `${first} ${last}`,
		age: age
	};
	return baby;
};
console.log(makeABaby1('rada', 'wana', 70));

const makeABaby2 = (first, last, age1) => ({name: `${first} ${last}`, age: age1});

console.log(makeABaby2('rad', 'wan', 40));