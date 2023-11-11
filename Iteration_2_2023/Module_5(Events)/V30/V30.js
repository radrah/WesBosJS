// Events - targets, bubbling, propagation and capture

const but = document.querySelector('.but');
function handleClick() {
    console.log('button clicked');
}

const hooray = () => {console.log('hooray');};

but.addEventListener('click', handleClick);

const cool = document.querySelector('.cool');
cool.addEventListener('click', hooray);

but.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(Event) {
    const button = Event.target
    // console.log(button.textContent);
    // console.log(parseFloat(Event.target.dataset.price));
    console.log(Event.target);
    // console.log(Event.currentTarget);
    // console.log(Event.target === Event.currentTarget);
    Event.stopPropagation();
}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click',handleBuyButtonClick);
});

window.addEventListener('click', function (event) {
    console.log('You Clicked the Window');
    console.log(event.target);
}, {capture: true});

const photo = document.querySelector('.photo');

photo.addEventListener('mouseenter', function(e) {
    console.count(e.currentTarget);

})