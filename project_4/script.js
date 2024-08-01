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

