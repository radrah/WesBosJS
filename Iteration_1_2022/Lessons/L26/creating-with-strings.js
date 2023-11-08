console.log('L26: Creating with Strings and XSS');

const item = document.querySelector('.item');
console.log(item);

console.log(item.innerHTML);

const width = 100;
const src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*';
const desc = 'cute pup';
const myHTML = `
  <div class="wrapper">
    <h2>"${desc}"</h2>
    <img src="${src}" alt = "${desc}"></img>
  </div>`
;

// console.log(typeof myHTML)
// item.innerHTML = myHTML
// console.log(myHTML)

// const itemImage = document.querySelector(".wrapper img")
// itemImage.classList.add('round');

// console.log(itemImage)

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);