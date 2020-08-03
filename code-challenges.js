// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// Declare a function that takes a string as param
const codeMyWord = (string) => {
    // Check to make sure the input is actually a string
    if (typeof string !== "string") {
        return "Please enter a string as a parameter to the function codeMyWord()"
    } else {
        // Declare a hash set to serve as a key
        var myKey = {
            a: "4",
            A: "4",
            e: "3",
            E: "3",
            i: "1",
            I: "1",
            o: "0",
            O: "0",
        }
        // Convert the string into an array of characters
        let charArray = string.split("");
        // Iterate through the array of lettes and check against the key.
        let codedCharArray = charArray.map(value => {
            // If one of the letters is in the key, then convert the letter into the number associates
            if (myKey.hasOwnProperty(value)) {
            // if (Object.keys(myKey).includes(value)) {
                return myKey[value];
            } else {
                return value;
            }
        })
        // Combine the array of characters to create the new coded string
        newCodedWord = codedCharArray.join("");
        // Return the coded string
        return newCodedWord;
      }
    }
    //Test to make sure that the method works
    console.log("-----CHALLENGE 1-----");
    console.log("This the the original variable: secretCodeWord1 = lackadaisical")
    console.log("This is the result of the method:");
    console.log(codeMyWord(secretCodeWord1));
    console.log("\n");
    console.log("This the the original variable: secretCodeWord2 = gobbledygook")
    console.log("This is the result of the method:");
    console.log(codeMyWord(secretCodeWord2));
    console.log("\n");


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// Declare a function that will take in any array
const wordsWithA = (array) => {
    // Use filter. For each element in the array, first check to make sure that the element is a string
    // If the element is a string, make sure the character "a" is in the string
    let newArray = arrayOfWords.filter(value => {
       return (typeof value == "string") && 
        ((value.includes("a")) || value.includes("A"))
    })
    return newArray;
}
//Test to make sure that the method works
console.log("-----CHALLENGE 2-----");
console.log("This the the original variable: arrayOfWords = ['Apple', 'Banana', 'Plum', 'Cherry', 'Kiwi', 'Peach']")
console.log("This is the result of the method:");
console.log(wordsWithA(arrayOfWords));
console.log("\n");

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// Declare a function that takes in an array 
const isFullHouse = (array) => {
    // Declare booleans to track if the full house conditions are met
    let threeOfAKinda = false;
    let pair = false;
    // As I'm doing my comparison, need to make sure that I'm not checking elements whose values I have already been checked
    let valuesAlreadyChecked = [];
    
    // Create a loop for an outter count
    for (let x = 0; x < array.length; x++) {
        // Need to make sure that I'm not checking elements whose values I have already been checked
        if (valuesAlreadyChecked.includes(array[x])){
            valuesAlreadyChecked = valuesAlreadyChecked;

        //If the value is novel, then proceed with logic
        } else {
            valuesAlreadyChecked.push(array[x]);
            // This is the secret sauce variable right here. This keeps track of how often a value has come up
            let matchCount = 0;
            // Now I need to creat a loop so that each element in the outter loop is compared to every following element in the loop
            for (let y = x+1; y < array.length; y++) {
                if (array[x] == array[y]) {
                    matchCount++;
                }
            }

            // Update the booleans if necessary
            if (matchCount == 2) {threeOfAKinda = true;} 
            if (matchCount == 1) {pair = true;}

        }
    }
    // Check the conditions to see if I have a full house
    if (threeOfAKinda == true && pair == true) {
        return true;
    } else {
        return false;
      }
}
//Test to make sure that the method works
console.log("-----CHALLENGE 3-----");
console.log("This the the original variable: hand1 = [5, 5, 5, 3, 3]")
console.log("This is the result of the method:");
console.log(isFullHouse(hand1));
console.log("\n");
console.log("This the the original variable: hand2 = [5, 5, 3, 3, 4]")
console.log("This is the result of the method:");
console.log(isFullHouse(hand2));
console.log("\n");
console.log("This the the original variable: hand3 = [5, 5, 5, 5, 4]")
console.log("This is the result of the method:");
console.log(isFullHouse(hand3));
console.log("\n");

