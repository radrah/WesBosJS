// Creating HTML

console.log('V25');

const myParagraph = document.createElement('p');
myParagraph.innerText = 'Hello I am P';
myParagraph.classList.add('h6');
myParagraph.classList.add('success');

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/100x100';
myImage.alt = 'random';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');


console.log(myParagraph, myImage, myDiv);

document.body.appendChild(myDiv);
myDiv.append(myParagraph, myImage);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'one';
const li2 = document.createElement('li');
li2.innerText = '2';
const li3 = document.createElement('li');
li3.innerText = '3';
const li4 = document.createElement('li');
li4.innerText = '4';
const li5 = document.createElement('li');
li5.textContent = 'five';

ul.appendChild(li2);
li2.insertAdjacentElement('beforebegin', li1);
li2.insertAdjacentElement('afterend', li3);
ul.appendChild(li5); 
li5.insertAdjacentElement('beforebegin', li4);
li2.insertAdjacentElement('afterend', li3);

console.log(ul);