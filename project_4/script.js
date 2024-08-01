const passwordBox = document.getElementById("password");
// console.log("PasswordValue",passwordBox);
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const specialChar = "!@#$%&'()*+,-./"

const allChar = upperCase + lowerCase + specialChar + number;



function generatePassword(){

    // Reset the password variable each time the function is called
    let password = "";

    // here you got only four characters
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while(passwordLength > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    console.log(password);
    passwordBox.value = password;
    console.log("passwordBox.value",passwordBox.value);
    
}

function copyPassword() {
    if (!passwordBox.value) {
        alert("no password generated yet");
        return;
    }

    
      // Focus on the input box to make sure it's active and ready for selection
    passwordBox.focus();
       // Select the text in the input box
    passwordBox.select();
    //If the Clipboard API is available, it tries to copy the text from the password input box to the clipboard.
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordBox.value)
        .then( () => console.log("password copied"))
        .catch(err => {
        console.error('Failed to copy text: ', err);
        alert("Failed to copy password");
        });
    }
}