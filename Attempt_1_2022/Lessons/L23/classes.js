// Classes
const pic = document.querySelector('.nice');
pic.classList.add('home');
pic.classList.remove('home');

console.log(pic.classList);

function toggleRound(){
	pic.classList.toggle('round');
}

// const toggleRound = () => {

// };
pic.addEventListener('click', toggleRound);

// Attributes
pic.alt = 'Cute pup'; //setter
pic.width = 50; //setter
console.log(pic.alt); //getter

console.log(pic.naturalWidth);
window.addEventListener('load', () => {console.log(pic.naturalWidth);});
console.log(pic.getAttribute('alt'));
pic.setAttribute('alt', 'real');
console.log(pic.getAttribute('alt'));

