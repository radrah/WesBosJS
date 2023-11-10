// DOM - HTML from Strings and XSS

console.log('V26');

const item = document.querySelector('.items');
const src = `https://source.unsplash.com/random/100x100`
const desc = `Cute thing <h1>Love this guy</h1>`
const myHTML = `
    <div class='wrapper'>
        <h2>${desc}</h2>
        <img src='${src}' alt='${desc}'/>
    </div>
`

item.innerHTML = `
    <div>
        <h1>Hey wassup</h1>
        ${myHTML}
    </div>
`;
console.log(item.innerHTML);

const itemImage = document.querySelector('.wrapper img');

itemImage.classList.add('round');
console.log(itemImage);

// Turn a string into a DOM Element

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
document.body.appendChild(myFragment)

console.log(myFragment);