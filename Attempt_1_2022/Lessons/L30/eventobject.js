console.log('L29: Events');

const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const handleClick = () => { console.log('IT works');};
const handleClick2 = () => { console.log('Button2 works too!');};

button.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick2);

button.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');

const handleBuyButtonClick = (event) => {
	console.log('button clicked');
	const button = event.target;
	//   console.log(button.textContent)
	//   console.log(`$`+ parseFloat(event.target.dataset.price))
	console.log(event.target);
	console.log(event.currentTarget);
	console.log(button === event.currentTarget);
	event.stopPropagation();
};

buyButtons.forEach((buyButton) => {
	buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', (event) => {
	console.log('clicked window');
	console.log(event.target);
}, 
{ capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(event) {
	console.log(event.currentTarget);
	console.log(this);
});