// Write the calcTip function
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

// Test the function with a bill value of 100
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);

// Print the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);