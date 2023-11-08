const people = [
	{ name: 'Wes', cool: true, country: 'Canada' },
	{ name: 'Scott', cool: true, country: 'Merica' },
	{ name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
	//debugger;
	console.group(`${person.name}`);
	console.log(`from ${person.country}`);
	console.log(`is ${person.cool}`);
	console.log('Done!');
	console.groupEnd(`${person.name}`);
});

console.table(people);

// Console Methods

// Callstack / stack-trace


// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff(){
	console.group('doing some stuff');
	console.log('Hey I am one');
	console.warn('watch me out!');
	console.error('Hey');
	console.groupEnd('doing some stuff');
}

function doctorize(name) {
	console.count(`running doctorize for ${name}`);
	return `Dr. ${name}`;
}

function greet(name) {
	doesntExist(); // causes an error
	return `Hello ${name}`;
}

function go() {
	const name = doctorize(greet('Wes'));
	console.log(name);
}

function bootstrap(){
	console.log('\n Starting the app!');
	go();
}
bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
	const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
	e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
	const res = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'text/plain',
		},
	});
	const joke = await res.text();
	console.log(joke);
	return joke;
}
