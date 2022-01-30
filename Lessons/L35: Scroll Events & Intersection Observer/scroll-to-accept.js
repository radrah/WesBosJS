const terms = document.querySelector('.terms-and-conditions');
const acceptButton = document.querySelector('.accept')
const watch = document.querySelector('.watch')

const obCallback = (payload) => {
    if(payload[0].intersectionRatio === 1){
        acceptButton.disabled = false
        acceptButton.addEventListener('click', () => {
            alert('Term and Conditions Accepted');
        ob.unobserve(terms.lastElementChild)
        })
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 0.1
});

ob.observe(terms.lastElementChild);


