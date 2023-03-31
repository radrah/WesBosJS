console.log('L33: Etch-a-Sketch')

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10

// Setup our canvas for drawing
// const width = canvas.width;
// const height = canvas.height;
// or easier to decalre variables

const {width, height} = canvas;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);

console.log(width, height)
ctx.lineJoin = 'round'
ctx.lineCap ='round'
ctx.lineWidth = MOVE_AMOUNT;

let hue = 50;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); //starts drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function 
const draw = ({key}) => {
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${Math.random()*hue}, 100%, 50%)`;
    console.log(hue)
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    //move our x and y value depending on what the user did
    switch(key){
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;    
        default:
            break;
    }
    
    ctx.lineTo(x,y)
    ctx.stroke();
}

// write a handler for the keys
const handleKey = (event) => {
    if (event.key.includes('Arrow')){
        event.preventDefault()
        draw({key: event.key})
    }
}

// clear/shake function
const clearCanvas = () => {
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width, height)
    canvas.addEventListener('animationend', () => {
        canvas.classList.remove('shake');
    }, {once: true})
}

//listen for arrow keys
window.addEventListener('keydown', handleKey)
shakeButton.addEventListener('click', clearCanvas)