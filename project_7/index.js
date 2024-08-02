quoteText = document.querySelector("blockquote");

authorName = document.getElementById("corner")


async function generateQuote() {

    const apiUrl = "https://api.quotable.io/random"
    
    // Fetch data from the API and display it in the blockquote and authorName elements
  try{
    const response = await fetch(apiUrl);
    // this is how we get data
    console.log("response",response);
    // convert into the json
    const data = await response.json();
    console.log("data",data);
    
    //display the values
    quoteText.textContent ='"'+data.content+'"';  
    authorName.textContent = "--" + data.author;
    
    if (!response.status === 200) {
        throw new Error(`Response status: ${response.status}`);
    }

    }catch (error) {
     console.error(error.message);
    }

}

generateQuote()
