const mainContainer = document.getElementById("container");

const successMsg = "successfully submitted";
const errorMsg = "please fix the error";
const invalidMsg = "invalid input, check again";

function getPopup(msg) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = msg;

    if (msg.includes("error")) {
        popup.classList.add("error");
    } if (msg.includes("success")) {
        popup.classList.add("success"); 
    }else if (msg.includes("invalid")) {
        popup.classList.add("invalid");
    }

    mainContainer.appendChild(popup);

    // Add the 'show' class to start the animation
    setTimeout(() => {
        popup.classList.add("show");
    }, 10); // Delay to ensure the class is added after the element is appended

    // Remove the popup after 3 seconds with a fade-out effect
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.remove();
        }, 500); // Match the duration of the fade-out transition
    }, 3000);
}
