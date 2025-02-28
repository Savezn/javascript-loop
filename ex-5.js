// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Method 1
let message = [];
// Start coding here
for (let i = 0; i < companyName.length; i++) {
  message.push(`Number ${i + 1} character is ${companyName[i]}`);
  //   console.log(message = `Number ${i+1} character is ${companyName[i]}`);
}

console.log(message);

// Method 2
// Start coding here
for (let i = 0; i < companyName.length; i++) {
  console.log(`Number ${i + 1} character is ${companyName[i]}`);
}
