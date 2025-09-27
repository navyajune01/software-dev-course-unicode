/*

Practice Problem #1

Exercise 1: Retrieve and Add Two Code Points
Objective: Extract the Unicode code points of the first two characters of a string,
add them together, and return the result.

Instructions:
Write a program that takes a string with at least two characters.
Use charCodeAt to get the Unicode code points of the first two characters.
Add the two code points together and assign the result to a variable named sumCodePoints.
Input:
let inputString = "Hi";

Expected Output:
sumCodePoints: 177 // 'H' = 72, 'i' = 105, 72 + 105 = 177

Exercise 2: Generate a String from Two Code Points
Objective: Take two numeric Unicode code points,
convert them to characters using String.fromCharCode,
and combine them into a single string.

Instructions:
Write a program that accepts two numeric Unicode code points.
Use String.fromCharCode to convert each code point to its corresponding character.
Combine the two characters into a single string and assign it to a variable named combinedString.
Input:
let codePoint1 = 65;
let codePoint2 = 66;

Expected Output:
combinedString: "AB" // 65 = 'A', 66 = 'B', combined = "AB"

Exercise 3: Find the Character Difference
Objective: Extract the Unicode code points of two given characters from a string
and calculate the absolute difference between them.

Instructions:
Write a program that takes a string with at least two characters and two specified indices.
Use charCodeAt to find the Unicode code points of the characters at the specified indices.
Calculate the absolute difference between the two code points and assign it to a variable named codePointDifference.
Input:
let inputString = "Cat";
let index1 = 0;
let index2 = 2;

Expected Output:
codePointDifference: 16 // 'C' = 67, 't' = 116, |67 - 116| = 16



Practice Problem #2

Objective
Practice converting characters from strings to Unicode code points
using charCodeAt and converting Unicode code points back to characters
using String.fromCharCode.

Instructions:
You will complete three tasks to explore the relationship
between characters and their Unicode code points.
Write JavaScript code to complete each task,
ensuring you assign your results to the specified variables.
Log all results to the console.

Tasks:
Task 1: Extract Code Points from Characters
Take the string "Code".
Use charCodeAt to extract the Unicode code points of the first and third characters.
Assign the results to variables named firstCodePoint and thirdCodePoint.

Task 2: Create a Word from Code Points
Use the Unicode code points 72, 101, 108, and 108 (corresponding to the characters H, e, l, and l).
Use String.fromCharCode to create the word "Hell".
Assign the result to a variable named wordFromCodePoints.

Task 3: Swap First and Last Characters
Take the string "Launch".
Extract the Unicode code points of the first and last characters using charCodeAt.
Use String.fromCharCode to swap these characters and create a new string: "hauncL".
Assign the result to a variable named swappedString.

*/

//Starter Code
// Task 1
const str = "Code";

// Extract Unicode code points using charCodeAt
const firstCodePoint = str.charCodeAt(0);  // 'C'
const thirdCodePoint = str.charCodeAt(2);  // 'd'

console.log(firstCodePoint);  // 67
console.log(thirdCodePoint);  // 100


// Task 2
// Use String.fromCharCode to build the word "Hell"
const wordFromCodePoints = String.fromCharCode(72, 101, 108, 108);

console.log(wordFromCodePoints);  // "Hell"


// Task 3
const originalString = "Launch";

// Get Unicode code points of first and last characters
const firstCharCode = originalString.charCodeAt(0);  // 'L'
const lastCharCode = originalString.charCodeAt(originalString.length - 1);  // 'h'

// Create swapped characters using fromCharCode
const newFirstChar = String.fromCharCode(lastCharCode);  // 'h'
const newLastChar = String.fromCharCode(firstCharCode);  // 'L'

// Create new string with swapped characters
const middleSubstring = originalString.slice(1, -1);  // "aunc"
const swappedString = newFirstChar + middleSubstring + newLastChar;

console.log(swappedString);  // "hauncL"