// Make a div
const div = document.createElement('div')
div.textContent = 'I am a div'

// add a class of wrapper to it
div.classList.add('wrapper')

// put it into the body
document.body.appendChild(div)
console.log(document.body)

// make an unordered list
// add three list items with the words "one, two, three" in them
const unorderedList = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    </ul>`

// put that list into the above wrapper
div.innerHTML = unorderedList
console.log(div)

// create an image
const img = document.createElement('img')

// set the source to an image
img.src = 'https://picsum.photos/50'

// set the width to 250
img.width = 250
img.height = 250

// add a class of cute
img.classList.add('cute')

// add an alt of Cute Puppy
img.alt = 'Cute Puppy'

// Append that image to the wrapper
div.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it
const stringHTML = `
  <div> 
    <p>
    paragraph 1
    </p>
    <p>
    paragraph 2
    </p>
  </div>
`
console.log(document.body.querySelector('div'))

// put this div before the unordered list from above
const  ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML("beforebegin", stringHTML)
console.log(document.body);

// add a class to the second paragraph called warning
const findPara = document.querySelectorAll('p')
console.log(findPara)
const secPara = findPara[1]
secPara.classList.add('warning')
console.log(secPara)
console.log(document.body)

// remove the first paragraph
const firstPara = findPara[0];
firstPara.remove()
console.log(firstPara)

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = ([name, age, height]) => {
    const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
      </div>
    `
    return html
}

// make a new div with a class of cards
const cards = document.createElement('div')
cards.textContent = 'I am cards'
cards.classList.add('cards')
console.log(cards)

// make 4 player cards using generatePlayerCard
playerList = [['rad', 21, 170], ['cliff', 35, 180], ['mike', 25, 172], ['mog', 40, 178]]


let cardsHTML = generatePlayerCard(playerList[0])
cardsHTML += generatePlayerCard(playerList[1])
cardsHTML += generatePlayerCard(playerList[2])
cardsHTML += generatePlayerCard(playerList[3])
for(let i = 0; i<playerList.length; i++){
    console.log(generatePlayerCard(playerList[i]))
}
cards.innerHTML = cardsHTML
console.log(cards.innerHTML)

// append those cards to the div

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete');

function deleteCard(event){
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard))

// select all the buttons!
// make out delete function
// loop over them and attach a listener
