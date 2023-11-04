console.log('L31: Forms & prevent deafault');

const facebook = document.querySelector('.facebook');

facebook.addEventListener('click', (event)=>{
	console.log('You clicked it');
	event.preventDefault();
	const willChangePage = confirm('This website sells your data, do you wish to proceed?');
	if(willChangePage == true){
		window.location = event.currentTarget.href;
	}
	else{
		event.preventDefault();
	}
});

const signupForm = document.querySelector('[name= "signup"]');

signupForm.addEventListener('submit', (event)=>{
	event.preventDefault();
	const name = event.currentTarget.name.value;
	if (name.includes('chad')){
		alert('Sorry chad');
		event.preventDefault();
	}
});

const logEvent = (event) => {
	console.log(event.type);
	console.log(event.currentTarget.value);
};
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);