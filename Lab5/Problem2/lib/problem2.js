// Main function to read input from user
function readInput() {
    const numbers = [];
    
    while (true) {
        const input = window.prompt("Enter an integer (a negative integer to quit):");
        
        // Check if user cancelled the prompt
        if (input === null) {
            break;
        }
        
        // Check if input is a negative integer
        if (isNegativeInteger(input)) {
            break;
        }
        
        // Check if input is a positive integer
        if (isPositiveInteger(input)) {
            numbers.push(parseInt(input));
        }
        // If it's not a positive integer, the loop continues to ask again
    }
    
    return numbers;
}

// Function to display statistics using alert
function displayStats(list) {
    // Use ternary operator to handle empty and non-empty cases
    const average = list.length === 0 ? 0 : (list.reduce((sum, num) => sum + num, 0) / list.length);
    const min = list.length === 0 ? 0 : Math.min(...list);
    const max = list.length === 0 ? 0 : Math.max(...list);
    
    // Format the message based on whether list is empty or not
    const message = list.length === 0 ? 
        "For the list  the average is 0.00, the minimum is 0, and the maximum is 0" :
        `For the list ${list.join(',')} the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}`;
    
    // Display using alert
    alert(message);
}

// Helper function to check if input is a positive integer
function isPositiveInteger(str) {
    // Check if string is not empty and contains only digits
    if (!str || str.trim() === '') return false;
    
    const num = Number(str);
    return Number.isInteger(num) && num > 0;
}

// Helper function to check if input is a negative integer
function isNegativeInteger(str) {
    // Check if string is not empty
    if (!str || str.trim() === '') return false;
    
    const num = Number(str);
    return Number.isInteger(num) && num < 0;
}

// Start the program
const list = readInput();
displayStats(list);