console.log("L27: Traversing and Removing Nodes in HTML");

const rad = document.querySelector(`.rad`)
console.log(rad.childNodes)
console.log(rad.children)
rad.append('eg. facebook')
console.log(rad.childNodes)

console.log(rad.children)
console.log(rad.firstElementChild)
console.log(rad.lastElementChild)
console.log(rad.previousElementSibling)
console.log(rad.nextElementSibling)
console.log(rad.parentElement)

const p = document.createElement('p');
p.textContent = 'Use .remove to remove me'
document.body.appendChild(p);

p.remove();
document.body.appendChild(p);
console.log(p)