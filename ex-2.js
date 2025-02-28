// Exercise #2: Sum the Numbers
let productPrices = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here
// Method 1
for (let i = 0; i < productPrices.length; i++) {
  total += productPrices[i];
}

console.log(total);

// Method 2
let total2 = productPrices.reduce((a, b) => a + b, 0);

console.log(total2);
