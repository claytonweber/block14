// Reverse Array

// With a for loop, create a JavaScript code that creates a new array in reverse order.
// Input Arrays 	Expected Results
// [1, 2, 3] 	[3, 2, 1]
// [1, 3, 5, 7, 9, 11] 	[11, 9, 7, 5, 3, 1]
// [20, 50, 30, 60, 200] 	[200, 60, 30, 50, 20]
// [1, -1, 2, -3, 5, -8, 13] 	[13, -8, 5, -3, 2, -1, 1]



function reverseThis(normArray) {
    let reverseArray = [];
    for(i = 0; i < normArray.length; i++) {
        reverseArray.unshift(normArray[i]);
    }
    console.log(reverseArray);
}

reverseThis([1, 2, 3]);
reverseThis([1, 3, 5, 7, 9, 11]);
reverseThis([20, 50, 30, 60, 200]);
reverseThis([1, -1, 2, -3, 5, -8, 13]);
