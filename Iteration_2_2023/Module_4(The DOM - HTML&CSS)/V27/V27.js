// Traversing & Removing Nodes

const wes = document.querySelector('.wes');

console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.sibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

console.log(wes.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove()

document.body.appendChild(p);