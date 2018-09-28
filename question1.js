// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
const randomArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function orderAndNest(array) {
	let orderedArray = array.sort(function(a, b){return a - b});
	let orderedNestedArray = [];
	for (i = 0; i < orderedArray.length; i++) {
		if (orderedNestedArray === []) {
			orderedNestedArray.push(orderedArray[i]);
		} else if (orderedArray[i] !== orderedNestedArray[orderedNestedArray.length-1] && !Array.isArray(orderedNestedArray[orderedNestedArray.length-1])) {
			orderedNestedArray.push(orderedArray[i]);
		} else if (orderedArray[i] === orderedNestedArray[orderedNestedArray.length-1]) {
			orderedNestedArray.pop();
			orderedNestedArray.push([orderedArray[i], orderedArray[i]]);
		} else if (orderedArray[i] === orderedNestedArray[orderedNestedArray.length-1][0]) {
			orderedNestedArray[orderedNestedArray.length-1].push(orderedArray[i]);
		} else {
			orderedNestedArray.push(orderedArray[i]);
		}
	}
	return orderedNestedArray;
}

orderAndNest(randomArray);





// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const otherRandomArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"1","2","4","591","392","391","2","5","10","2","1","1","1","20","20"];

let newArray = [];

const orderSortNestArray = (array) => {
	newArray = [] //this clears the array at beginning each time the function is called
	//make numbers array and string array
	const numberArray = otherRandomArray.filter(arrayItem => typeof(arrayItem) === "number");
	const letterArray = otherRandomArray.filter(arrayItem => typeof(arrayItem) === "string");

	// sort arrays smallest to largest
	numberArray.sort((a, b) => a - b);
	letterArray.sort((a, b) => a  -b);

	// group duplicates into array
	const numbers = groupArray(randomArray);
	const strings = groupArray(randomArray);

	// Assemble the answer array
	// if there are values in the string array add it to new array
	strings.length !== 0?
		(newArray.push(numbers), newArray.push(strings)) :
	// if string array empty, assign numbers array to solution array
		(newArray = numbers);
}


const groupArray = (array) => {
	let sortedArray = array;
	let i = 0;

	while (i < sortedArray.length) {
		let value = sortedArray[i];
	    let index = sortedArray.lastIndexOf(value);
	    let count = index + 1 - i;

	    if (count > 1) {
	    	sortedArray.splice(i, count, Array(count).fill(value));
		}
		i++;
	return sortedArray;
}

orderSortNestArray(otherRandomArray);