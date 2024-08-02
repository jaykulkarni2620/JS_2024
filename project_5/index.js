const secondDiv = document.getElementsByClassName("secondContainer")

let number = 0;

// Load notes from localStorage on page load
// document.addEventListener("DOMContentLoaded", loadNotes);

function creatingNotes() {


    number++;

    // Create a new wrapper div
    let noteWrapper = document.createElement("div");
    noteWrapper.classList.add("noteWrapper");
    // const questionNo = number + 1;
    // console.log("questionNo",questionNo);

    // secondDiv.textContent = questionNo + noteWrapper;
  

    // Create the input element"
    
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter your notes here...";
        newInput.classList.add("newInput");
    
   

    // Create the delete image element
    let deleteImage = document.createElement("img");
    deleteImage.src = "./images/delete.png";
    deleteImage.alt = "Delete";

    // Create the save element
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
   

    // Create the question number element
    let questionNumber = document.createElement("div");
    questionNumber.textContent = number;
    questionNumber.classList.add("questionNumber");

    // Append the input and image to the wrapper
    noteWrapper.appendChild(questionNumber);
    noteWrapper.appendChild(newInput);
    noteWrapper.appendChild(deleteImage);
    noteWrapper.appendChild(saveButton);

    // Append the wrapper to the container
    document.querySelector(".secondContainer").appendChild(noteWrapper);

    // Add click event to delete image
    deleteImage.addEventListener("click", function() {
        noteWrapper.remove();
    });

    saveButton.addEventListener("click", function () {
   alert("not saved")
    });

    

}


// function saveNoteToLocalStorage(text) {
//     const notes = JSON.parse(localStorage.getItem("notes")) || {};
//     notes = text;
//     localStorage.setItem("notes", JSON.stringify(notes));
// }

// function loadNotes() {
//     const notes = JSON.parse(localStorage.getItem("notes")) || {};
//     for (const [key, value] of Object.entries(notes)) {
//         creatingNotes(value, parseInt(key));
//     };

// }
