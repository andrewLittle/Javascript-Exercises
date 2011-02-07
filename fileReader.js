/**
 * fileReader.js
 * author:  Andy Little
 * description:  Reads a file and adds up the keys for each name
 */
function fileRead() {
	// Check for IE 5
    try {  txtFile = new ActiveXObject('Msxml2.XMLHTTP');   }
    catch (e) 
    {
    	// Check for IE 7
        try {   txtFile = new ActiveXObject('Microsoft.XMLHTTP');    }
        catch (e2) 
        {
        	// All other browsers
        	try {  txtFile = new XMLHttpRequest();     }
        	catch (e3) {}
        }
    }
    // Open file for read
	txtFile.open("GET", "name.txt", false);
	// Send it for read
	txtFile.send(null);
	// Split file in array by end line(\n)
	var lines = txtFile.responseText.split("\n");
	// Array to store data
	var names = new Array();
	// Ripple through lines from file
	for(var i=0;i<lines.length;i++) {
		// Split lines into name/value array by comma
		var entry = lines[i].split(",");
		// If entry is blank, skip it
		if(entry=="") {
			continue;
		}
		// Check to see if name exists in array
		if(typeof(names[entry[0]])=='undefined') {
			// If it does not, add it
			names[entry[0]] = entry[1];
		} else {
			// If it does, pull out current value and using eval() add current value and new value
			var temp = names[entry[0]];
			names[entry[0]] = eval(temp) + eval(entry[1]);
		}
	}
	// Ripple through names array and print it out
	var output;
	for(var name in names) {
		// Build output string
		var outputLine = "The total for " + name + " is " + names[name] + ". ";
		// Check if first time
		if(typeof(output)=='undefined') {
			// Put it in
			output = outputLine;
		} else {
			// Concatenate 
			output = output + outputLine;
		}
	}
	// Put output on the page
	document.getElementById("output").innerHTML = output;
	return;
}