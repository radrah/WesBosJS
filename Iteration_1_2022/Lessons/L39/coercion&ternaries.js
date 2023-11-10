const isCool = true;

if (!isCool) {
	console.log('You are not cool :(');
}

const name = 'rad';
console.log(name);
console.log(!name);
console.log(!!name);

const count = 1;

const word = count === 1 ? 'item': 'items';
const sentence = `You have ${count} item ${count === 1 ? '': 's'} in your cart`;
console.log(sentence);

const showAdminBar = () => {console.log('Showing admin bar');};
const isAdmin = true;
isAdmin ? showAdminBar() : null;

const check1 = () => {return true;};
const check2 = () => {return false;};
const check3 = () => {return true;};

if (check1() && check2() && check3()){
	console.log('all checks passed');
}
else{
	console.log('some checks failed');
}