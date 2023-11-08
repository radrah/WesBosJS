console.log('L15: Different ways of declaring functions');

// First-class citizen/functions;

const age = 100;
const cool = true;

// hoisted - only functions cleared defined as functions
console.log(doctorize('rad'));

function doctorize(firstName) {
	return `Dr. ${firstName}`;
}

// anonymus fucntion;
// function (firstName){
//     return `Dr. ${firstName}`;
// }

// Function Expression
const doctorize2 =  function (firstName){
	return `Dr. ${firstName}`;
};

// Arrow function
const inchToCM = (inches) => inches * 2.54; 

const add = (a, b=3) => a+b;

// const makeABaby = (first, last, age = 0) =>  ({name: `${first} ${last}`, age: 0});
// in this case, the normal function is better
function makeABaby(first, last){
	const baby = { 
		name: `${first} ${last}`,
		age: 0
	};
	return baby;
}

// IIFE - Immediately Invoked Function Expression

(function(age = 5) {
	console.log('Running the Anon function');
	return `You are cool and is ${age} years old`;
})(25);

//Methods

const wes = {
	name: 'Wes Bos',
	sayHi: function(){
		console.log(this.name);
		console.log('Hi, my name is Radwan');
		return 'Hey wes';
	},
	// Short-hand method
	yellHi(){
		console.log('HIIIIIII');
		console.log(this);
	},
	whisperHi: () => {
		console.log('hi');
	}
};

// Callback functions
// click callback
const button = document.querySelector('.click-me');

function handleClick(){
	console.log('Great Clicking!!');
}

button.addEventListener('click', function(){
	console.log('Nice Job!');
});

const helpMe = () => {
	console.log('hello world');
};