// Make a div

// add a class of wrapper to it

// put it into the body
const div = document.createElement('div');
div.classList.add('wrapper');

document.body.append(div);

// make an unordered list

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'one';
const li2 = document.createElement('li');
li2.innerText = 'two';
const li3 = document.createElement('li');
li3.innerText = 'three';

ul.appendChild(li2);
li2.insertAdjacentElement('beforebegin', li1);
li2.insertAdjacentElement('afterend', li3);

div.append(ul);


// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const img = document.createElement('img');
img.src = 'https://source.unsplash.com/random/250x250';
img.width = '250';
img.classList.add('cute');
img.alt = 'Cute Puppy';

div.append(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div>
        <p>P1</p>
        <p class='warning'>P2</p>
    </div>`;

ul.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph
const p2 = document.querySelector('.warning');
const p1 = p2.previousElementSibling;

p1.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height, unit = 'cm') {
    const playerCardHTML = `
    <div class="playerCard success">
        <h2>${name} - ${age}</h2>
        <p>They are ${height}${unit} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
        <button class='delete'>DELETE ME!</button>
    </div>`;
    return playerCardHTML;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard('Rad1', 10, 10);
console.log(player1);
const player2 = generatePlayerCard('Rad2', 20, 20);
const player3 = generatePlayerCard('Rad3', 30, 30);
const player4 = generatePlayerCard('Rad4', 40, 40);
// console.log(player1, player2, player3, player4);

// append th(ose cards to the div
cards.innerHTML = player1 + player2 + player3 + player4;
console.log(cards);

// put the div into the DOM just before the wrapper element
console.log(div);
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const deleteButton = document.querySelectorAll('.delete');
console.log(deleteButton);

// select all the buttons!
// make out delete function
// loop over them and attach a listener

function deleteCard(event) {
    const currentCard = event.currentTarget;
    currentCard.parentElement.remove();
    console.log('Deleting Card');
}

deleteButton.forEach(button => button.addEventListener('click', deleteCard));


