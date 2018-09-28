// Question 2:
// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 40, 50];
const testTarget = 46;

//loop through array testing if number is less than the target number
	// if it is, loop through the array a second time to see if another number in the array adds to the first number to equal the target number
		// if it does, return both numbers and a message
		// if not, move on to the next number
	// if not, move on to the next number

const sumOfTarget = (array, target) => {
	let possibleSolutions = [];
	array.forEach(function(element) {
		// console.log(element);
		if (element < target) {
			//console.log(element, target);
			let firstNumber = element;
			array.forEach(function(element2){
				if (element2 === target - firstNumber) {
					// console.log(firstNumber, element2, target);
					let secondNumber = element2;
					possibleSolutions.push([firstNumber, secondNumber]);
				}
			});
		}
	});
	if (possibleSolutions.length < 1) {
		console.log(`Unfortunately, there are no two numbers in this array who's sum is ${target}.`)
	} else if (possibleSolutions.length === 1) {
		console.log(`Great news, ${firstNumber} and ${secondNumber} are both contained in this array.  Their sum is ${target}!`);
	} else {
		console.log(`Oh wow!  This array contained ${possibleSolutions.length} pairs of numbers who's sum is ${target}. Those numbers are:`);
			possibleSolutions.forEach(function(element) {
			console.log(`${element[0]}, ${element[1]}`);
		})
	}
}


sumOfTarget(testArray, testTarget);