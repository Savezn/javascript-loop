// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// Method 1
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName += companyName[i];
}

console.log(reversedCompanyName);

// Methhod 2
let reversedCompanyName2 = companyName.split("").reverse().join("");
console.log(reversedCompanyName2);