// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let numSudent of scores) {
	console.log(numSudent);
	if (minScore === undefined) {
		minScore = numSudent;
	} else if (minScore > numSudent) {
		minScore = numSudent;
	}
	console.log("minScore: ", minScore);
}
console.log(minScore);
