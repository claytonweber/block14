
// Only Odds

// Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.
// Input Arrays 	Expected Results
// [2, 4, 6, 8, 11, 20, 15, 22] 	[ 11, 15]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 	[1, 3, 5, 7, 9]
// [70, 42, 55, 81, 21, 91, 34] 	[55, 81, 21, 91]
// [2, 4, 6, 8, 10, 11, 12]  	[11]

let oddsArray = [];

function onlyOdds (numArray) {
    for (i = 0; i < numArray.length; i++) {
        if(numArray[i] % 2 == 1) {
            oddsArray.push(numArray[i]);
            // console.log(numArray[i] + " is odd");
        }
        
    }
    console.log(oddsArray);

}

// onlyOdds([2, 4, 6, 8, 11, 20, 15, 22]);
// onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// onlyOdds([70, 42, 55, 81, 21, 91, 34]);
onlyOdds([2, 4, 6, 8, 10, 11, 12]);