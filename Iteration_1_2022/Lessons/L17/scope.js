console.log('L17: Scope');

// const first = 'wes';
// let second = 'bos';
// var age = 100;
//var is attahced to the window

function sayHi(){
	console.log('say hi');
}

const age = 100;

function go (){
	const hair = 'blonde';
}

console.log(age);
//console.log(hair);
// hair is not global because it is a function scope
//it is only available inside of a function

//block scoping

function isCool() {
	let cool;
	if (1 === 1) {
		cool = true;
	}
	console.log(cool);
	return cool;
}

const dog = 'snickers';

function logDog(){
	console.log(dog);
}

function go(){
	const dog = 'sunny';
	logDog();
}

go();

function sayHi(name){
	function yell(){
		console.log(name.toUpperCase());
	}
	yell();
}

sayHi('rad');