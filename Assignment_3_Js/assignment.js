/*

1.  We have an object storing salaries of our team
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
*/
function printSalariesSum() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0;
    for (let person in salaries) {
        sum += salaries[person];
    }

    document.getElementById('result1').innerText = 'Total Salaries Sum: ' + sum + ' for Salaries ' + JSON.stringify(salaries);
}
/*
2. Write a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
Example:
let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};
multiplyNumeric(menu);
// After the call, menu should be:
// {
//   width: 400,
//   height: 600,
//   title: "My menu"
// }
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
*/
function printMultiplyNumeric() {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    document.getElementById('result2.1').innerText = 'Before Multiply Numeric: ' + JSON.stringify(menu);

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                obj[key] *= 2;
            }
        }
    }

    multiplyNumeric(menu);

    document.getElementById('result2.2').innerText = 'After Multiply Numeric: ' + JSON.stringify(menu);
}



/*
3. Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false.
   Make sure '@' must come before '.' and there must be some characters between '@' and '.'.
   The function must be case-insensitive.
*/



// Function to print email validation result
function printCheckEmailId() {
    let inputEmail = document.getElementById('emailInput').value.trim();
    function checkEmailId(str) {
        str = str.toLowerCase();
        let aIndex = str.indexOf('@');
        let dotIndex = str.indexOf('.');
    
        if (aIndex > 0 && dotIndex > aIndex + 1 && dotIndex <str.length - 1) {
            return true;
        }
        return false;
    }
    let result = checkEmailId(inputEmail);

    document.getElementById('result3').innerText = 
        'Email "' + inputEmail + '" is ' + (result ? 'valid' : 'invalid');
}

/*
4. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength,
   replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.
   The result of the function should be the truncated (if needed) string.
   Example:
   truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
   truncate("Hi everyone!", 20) = "Hi everyone!"
*/
function printCheckTruncation() {
    let inputString = document.getElementById('stringInput').value
    let inputMaxLen = document.getElementById('maxLen').value

    function truncate(strIn, maxLenIn) {
        if (strIn.length > maxLenIn) {
            return strIn.slice(0,maxLenIn-1) + "..."
        }
        else {
            return strIn;
        }
    }

    let result = truncate(inputString, inputMaxLen);
    document.getElementById('result4').innerText = "Your String is:\n" + result;
}


/*
5. Let’s try 5 array operations.
   Create an array styles with items “James” and “Brennie”.
   - Append “Robert” to the end.
   - Replace the value in the middle by “Calvin”. Your code for finding the middle value should work for any arrays with odd length.
   - Remove the first value of the array and show it.
   - Prepend Rose and Regal to the array.
   Example:
   Initial array: ["James", "Brennie"]
   After appending "Robert": ["James", "Brennie", "Robert"]
   After replacing middle value with "Calvin": ["James", "Calvin", "Robert"]
   After removing the first value: ["Calvin", "Robert"]
   After prepending "Rose" and "Regal": ["Rose", "Regal", "Calvin", "Robert"]

*/
let styles = ["James", "Brennie"];
console.log(styles); 

// Append "Robert" to the end
styles.push("Robert");
console.log(styles); 

// Replace the value in the middle by "Calvin"
styles[Math.floor(styles.length / 2)] = "Calvin";
console.log(styles); 

// Remove the first value of the array and show it
let first = styles.shift();
console.log(first); 
console.log(styles);

// Prepend "Rose" and "Regal" to the array
styles.unshift("Rose", "Regal");
console.log(styles); 