// where we want to display the value
const display = document.getElementById("display");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
 
function watch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    //For two zeros // hhours less than Then add 0
    // let h = hours < 10 ? "0" + hours : hours
    // let m = minutes < 10 ? "0" + minutes : minutes
    // let s = seconds < 10 ? "0" + seconds : seconds

    // Display the time
    display.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startWatch() {
    // Check if the timer is already running
    if (timer === null) {
        // Start the timer if it's not already running
        timer = setInterval(stopWatch, 1000);
    }
}

function pauseWatch() {
    // Stop the timer if it's running
    clearInterval(timer);
    timer = null;
}

function resetWatch() {
        // Clear the timer if it's running
        clearInterval(timer);
        timer = null;
         // Reset the time variables
        [seconds, minutes, hours] = [0, 0, 0];
        // Update the display to show the reset time
        display.innerHTML = "00:00:00";
}