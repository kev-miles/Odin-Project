
function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}

console.log(troubleshooting())

function numberChecker(number) {
	if(number >= 10) {
		return true;
	} else {
		return false;
	}
}

console.log(numberChecker(6))
console.log(numberChecker(16))
console.log(numberChecker(12))
console.log(numberChecker(8))

/**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 * 
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */

 const a = 1+8
 const b = 22*3
 const c = 5/4
 const d = a-17
 const e = a+b+c+d
 
 console.log(a, b, c, d, e)

 /**
  Be sure to uncomment the items under each step below the editable section. Be sure to comment out the entire last step. If your code fails to run, or you see a "ReferenceError" in the console, make sure you have completed all of the objectives 
  
  Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  
  
	Step 1:
	 Take a look at this code and try to predict what it's going to do before running it...
	
	After making your guess, press 'run' at the top and take a look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.
	



	Step 2:
	Once you have a good handle on the code snippet, delete the code then follow the following instructions between the lines and try to recreate the snippet on your own.
	
	---------------------------------------------------------------
	
	4 variables: first name, last name, current year, and birth year.
	a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
	print the greeting with console.log
	
	---------------------------------------------------------------
	
	Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to run the code to make sure the code still works!





	Step 3:
	Add 2 more variables: "fullName" and "age"

	Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something like this: "Hello, my name is " + fullName)

	Do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the greeting.
	
	===== NOTE ====
	In order to make the tests pass you will need to use these exact values for the years and names.  The wording needs to be exact.  If the tests fail, check spacing and punctuation:
	
	birthYear = 1948
	thisYear = 1965
	firstName = Carlos
	lastName = Stevenson

	The greeting should say "Hello! My name is Carlos Stevenson and I am 17 years old."
*/

// Edit below this line =============

const birthYear = 1948;
const thisYear = 1965;
const age = thisYear - birthYear
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName  = firstName + " " + lastName;

const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

console.log(greeting);




// Edit above this line ==============


// Testing your code

// Step 2: 
 /*
module.exports = {
	testGroup: "a",
	greeting,
	birthYear,
	thisYear,
	firstName,
	lastName
}
*/

// Step 3: (Be sure to comment out Step 2)

// module.exports = {
// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }