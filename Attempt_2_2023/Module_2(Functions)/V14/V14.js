// Functions - Parameters and Arguments

// let bill = 100;
// const tax = 0.1;
// const tip = 0.13;

// ??Function definition
function calculateBill(bill, tax = 0.1, tip= 0.05) {
	// this is the function body
	console.log(bill, tax, tip);
	const total = bill + (bill * tax) + (bill * tip);
	console.log('calculateBill function working');
	return total;
}

// const myTotal = calculateBill();
// console.log(`your total is ${myTotal}`);
// bill= 200
// console.log(`your total is ${calculateBill()}`);

// Function Call or Run
console.log(calculateBill(300, undefined));

const myTotal2 = parseInt(calculateBill(500, 0.05, 0.1));
console.log(myTotal2);

const radBill = 1000;
const radTax = 0;
const radTip = 0;

console.log(calculateBill(radBill, radTax, radTip));

const sayHiTo = (firstName) => {
	return `Hello ${firstName}`;
};

const myName = 'Rad';
console.log(sayHiTo(myName + 'wan'));

const doctorize = (name1= 'Radwan') => {
	return `Dr. ${name1}`;
};

const yell = (name2) => {
	return `HEY ${doctorize(name2.toUpperCase())}`;
};

console.log(yell(doctorize()));