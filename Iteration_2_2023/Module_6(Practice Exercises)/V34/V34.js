// Click Outside Modal
const cardButtons = document.querySelectorAll('.card button');

const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const img = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    modalInner.innerHTML = `
        <h2>${name}</h2>
        <img src="${img.replace('200', '500')}" alt="${name}" />
        <p>${desc}</p>
    `;
    modalOuter.classList.add('open');
    console.log(modalInner);
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if(isOutside) {
    modalOuter.classList.remove('open');
    }
}

modalOuter.addEventListener('click', closeModal); 

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        modalOuter.classList.remove('open');
    }
});