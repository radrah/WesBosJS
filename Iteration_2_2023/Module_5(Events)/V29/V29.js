// Event Listeners

const but = document.querySelector('.but');
function handleClick() {
    console.log('button clicked');
}

const hooray = () => {console.log('hooray');}

but.addEventListener('click', handleClick);

const cool = document.querySelector('.cool');
cool.addEventListener('click', hooray);

but.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('.buy');

function buying() {
    console.log('Buying this rn');
}

buyButtons.forEach(function(button) {
    button.addEventListener('click', buying);
});