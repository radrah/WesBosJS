// Scroll Events and Intersection Observer

console.log('V35');

const terms = document.querySelector('.terms-and-conditions');
const acceptButton = document.querySelector('.accept');
const watch = document.querySelector('.watch');

function obCallback(payload) {
  if(payload[0].intersectionRatio === 1) {
    acceptButton.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, {root: terms, threshold: 1});

// console.log(terms.lastElementChild);
ob.observe(terms.lastElementChild);