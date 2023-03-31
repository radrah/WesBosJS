console.log("L29: Events")

const button = document.querySelector('.button');
const button2 = document.querySelector('.button2')
const handleClick = () => { console.log('IT works')}
const handleClick2 = () => { console.log('Button2 works too!')}

button.addEventListener('click', handleClick)
button2.addEventListener('click', handleClick2)

button.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll("button.buy")
const itemBought = ()=>{console.log('Item Bought')}

buyButtons.forEach((buyButtons)=>{
    buyButtons.addEventListener('click', itemBought)
})

