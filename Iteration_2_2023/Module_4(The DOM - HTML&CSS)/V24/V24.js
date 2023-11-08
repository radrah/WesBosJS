// DOM - Built In & Custom Data Attributes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'cute pic'; // setter
console.log(pic.alt); // getter
pic.width = 200;

window.addEventListener('load', function() {
    console.log(pic.naturalWidth);
});