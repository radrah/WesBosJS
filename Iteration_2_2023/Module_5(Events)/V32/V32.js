// Events - Accesibility Gotchas and Keyboard Codes

console.log('V32');

// const wes = document.querySelector('.wes');

// wes.addEventListener('click', function (event) {
//     console.log(event);
    
//     const shouldChangePage = confirm('This website is malicious!, do you wish to proceed');
//      if (!shouldChangePage){
//         event.preventDefault();
//      }
// });

// const signUpForm = document.querySelector('[name="signup"]');
// signUpForm.addEventListener('submit', function(event) {
//     console.log(event);
    
//     console.log(event.currentTarget.name.value);
//     console.log(event.currentTarget.email.value);
//     console.log(event.currentTarget.agree.checked);
    
//     const name = event.currentTarget.name.value;
//     if(name.includes('chad')) {
//         alert('Sorry bro');
//         event.preventDefault();
//     }
// });

// function logEvent(event) {
//     console.log(event.type);
// }
// signUpForm.name.addEventListener('keyup', logEvent);
// signUpForm.email.addEventListener('keydown', logEvent);
// signUpForm.name.addEventListener('focus', logEvent);
// signUpForm.email.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');
function handleClick(e) {
    if(e.type === 'click' || e.key === 'Enter'){
    console.log('You clicked the photo');}
}

photo.addEventListener('click', handleClick);
photo.addEventListener('keyup', handleClick);