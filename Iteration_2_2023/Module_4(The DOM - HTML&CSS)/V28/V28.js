// DOM - Cardio practice

// Create Div, add wrapper class, insert in HTML Body
const div = document.createElement('div');
div.classList.add('wrapper');

document.body.append(div);

// Create unordered list, add 3 l;ist items, inser in abovce wrapper
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

const img = document.createElement('img');
img.src = 'https://source.unsplash.com/random/250x250';
img.width = '250';
img.classList.add('cute');
img.alt = 'Cute Puppy';

div.append(img);

const myHTML = `
    <div>
        <p>P1</p>
        <p class='warning'>P2</p>
    </div>`;

ul.insertAdjacentHTML('beforebegin', myHTML);
const p2 = document.querySelector('.warning');
const p1 = p2.previousElementSibling;

p1.remove();
