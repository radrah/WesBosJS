// Elements Properties and Methods

const p = document.querySelector('p');
console.log(p);

const article = document.querySelector('.itemA');
const img = document.querySelector('.item2');
const allImg = document.querySelectorAll('.items img');
const articleHeading = article.querySelector('h2');

console.log(article);
console.log(img);
console.log(allImg);
console.log(articleHeading);
console.log(articleHeading.innerText); // Shows hidden stuff in there too

articleHeading.textContent = 'Rad is Cool'; // Changing the content of the element
console.log(articleHeading.textContent);
console.log(articleHeading.innerText);

const pizza = document.querySelector('.pizza');
console.log(pizza.textContent);

pizza.textContent += ': 9';
console.log(pizza.textContent);

pizza.insertAdjacentText("afterbegin", '🍕');
console.log(pizza.textContent);