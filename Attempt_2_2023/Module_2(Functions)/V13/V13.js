// Custom Functions

const bill = 100;
const tax = 0.1;
const tip = 0.13;

// ??Function definition
function calculateBill() {
	// this is the function body
	const total = bill * (1+tax+tip);
	console.log(total, 'calculateBill function working');
	return total;
}

// Function Call or Run
calculateBill();

const myTotal = calculateBill();
console.log(`your total is ${myTotal}`);
console.log(`your total is ${calculateBill()}`);