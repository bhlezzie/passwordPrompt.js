// passwordPrompt.js

// Set a hardcoded correct password
const correctPassword = "mySecretPassword";

// Initialize the user's password variable
let userInput;

// Use a do-while loop to prompt for the password until the correct one is entered
do {
    userInput = prompt("Please enter the password:");
    
    // Check if user cancels the prompt
    if (userInput === null) {
        console.log("Prompt cancelled. Exiting.");
        break; // Exit if the user cancels
    }
} while (userInput !== correctPassword);

// Log a success message when the correct password is entered
if (userInput === correctPassword) {
    console.log("Success! You entered the correct password.");
}
