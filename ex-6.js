// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
// console.log(typeof reversedCompanyName);

// Start coding here
for (let i = companyName.length - 1; i >= 0; i -= 1) {
	if (i === companyName.length) {
		reversedCompanyName = companyName[i];
	}
	reversedCompanyName = reversedCompanyName + companyName[i];
	console.log(i + " : " + reversedCompanyName);
}
console.log(reversedCompanyName);
