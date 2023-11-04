console.log('L25: Creating HTML');

const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/100x100';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv =document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);
myDiv.appendChild(heading);

console.log(myDiv);

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = li5.cloneNode(true);
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = li4.cloneNode(true);
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);