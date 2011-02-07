/**
 * palindrome.js
 * author:  Andy Little
 * description:  Checks to see if a passed string is a palindrome
 * @return boolean (true if palindrome, false if not)
 */
function checkPalindrome(entry){
	// Make entry lower case and strip out all non-alphanumeric characters
	var str = entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var counter = 0;
	// Test to make sure something was entered
	if(str=="") {
		alert("Nothing was entered.");
		return false;
	}
	// Determine if string has an even or odd number of characters
	if ((str.length) % 2 == 0) {
		counter = (str.length) / 2;
	} else {
		// If its length is one than it's automatically a palindrome
		if (str.length == 1) {
			alert("Entry is a palindrome.");
			return true;
		} else {
			// If it's odd ignore middle character
			counter = (str.length - 1) / 2;
		}
	}
	// Loop through to check if it's a palindrome by checking the first character 
	// to the last character and then moving one in
	for (var i = 0; i < counter; i++) {
		// Compare characters and drop out if they do not match 
		if (str[i] != str.slice(-1-i)[0]) {
			alert("Entry is not a palindrome.");
			return false;
		}
	}
	// Tell them that they've won
	alert("The entry is a palindrome.");
	return true;
}
