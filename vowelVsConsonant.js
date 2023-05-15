// Vowel versus Consonant

// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.

// Hint: Define two variables that keep track of the number of consonants and vowels.
// Input Arrays 	Expected Results
// "hello" 	
// "hello has 3 consonants and 2 vowels"
// "ukelele" 	
// "ukelele has 3 consonants and 4 vowels"
// "awesome" 	"awesome has 3 consonants and 4 vowels"
// "onomonopia" 	"onomonopia has 4 consonants and 6 vowels"
// "textbook" 	"textbook has 5 consonants and 3 vowels"



function letterChecker(letters) {
    let consonantsCount = 0;
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let letter of letters) {
        if(vowels.includes(letter)) {
            vowelsCount++;
            // console.log(vowelsCount);
        } else {
            consonantsCount++;
            // console.log(consonantsCount);
        }
    }

    console.log("There are " + vowelsCount + " vowels and " + consonantsCount + " consonants in the word " + letters +"!");
}

// letterChecker("ukelele");
// letterChecker("awesome");
// letterChecker("onomonopia");
letterChecker("textbook");