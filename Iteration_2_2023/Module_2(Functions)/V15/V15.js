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

// Immediately Invoked Function Expression
(function() {
	console.log('Running the Anon function');
	return 'You are cool';
})();

(function(age) {
	console.log('Running the Anon function', age);
	return 'You are cool';
})(5);


// Methods - Fucntion that lives inside of an object
// log function lives inside the console object - console.log()
const wes = {
	name: 'Wes Bos',
	sayHi: function() {
		console.log(`Hey ${this.name}`);
		return 'hey wes';
	},
	// Short hand method
	yellHi() {
		console.log('Hey WESSSSSS');
	},
	// Arrow Function
	wisperHi: () => {
		console.log('I am wispering');
	},
};

// Callback function
//Click callback function

const button = document.querySelector('.clickMe');
console.log(button);

let counter = 0;
function handleClick(){
	counter += 1;
	console.log(counter);
	return counter;
}
button.addEventListener('click', handleClick);
button.addEventListener('click', function(){console.log('nice job');});

let count = handleClick();

// Timer Callback
setTimeout(() => {
	console.log('Done');
}, 1000);