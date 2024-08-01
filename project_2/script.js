async function addTask() {
    const taskInput = document.querySelector('#taskInput');
    const listContainer = document.querySelector('#taskList');
    if(taskInput === '') {
        alert('Please enter a task');
    } else {
        // Add task
        // Create a new element
        let li = document.createElement('li');
        // Add the input value to the inner HTML of the li element
        li.innerHTML = taskInput.value;
        // Append the new li element to the list container
        listContainer.appendChild(li);

        // cross sign 
        let span = document.createElement('span');
        // addding the value inside it
        span.innerHTML = "\u00d7"
        //display the span on the screen
        li.appendChild(span);

    }
    // to clear the input value 
    taskInput.value = '';

    console.log("Input value:",taskInput );

    
    listContainer.addEventListener("click", function(e){
    // When the user clicks on a span element, remove the parent li element
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        console.log("Removed span element")

    // chceked or uncheked
    }else if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
});



}
