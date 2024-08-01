const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        answer: "Paris",
    },
    {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "F. Scott Fitzgerald", "J.K. Rowling", "George Carlin"],
        answer: "George Orwell",
    },
    {
        question: "What popular board game involves rolling dice to move a piece around a board?",
        options: ["Monopoly", "Chess", "Settlers of Catan", "Risk"],
        answer: "Monopoly",
    },
    {
        question: "What is the world's largest island?",
        options: ["Greenland", "Madagascar", "Iceland", "New Zealand"],
        answer: "Greenland",
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    // inside the question array taking the "0" position
    const currentQuestion = questions[currentQuestionIndex];
    // added the question number inside the questionElement
    const questionNo = currentQuestionIndex + 1;
    // display the question number and question inside the questionElement
    questionElement.textContent = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.options.forEach(option => {
        // create a new button element
        const button = document.createElement('button');
        // added the value inside it to the button
        button.textContent = option;
        // added "btn" class to the button
        button.classList.add('btn');
        //added it to the answerButtons container
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    //getting the selected button with value
    const selectedButton = e.target;
    // verifying the selected button and the answer should be same
    const isCorrect = selectedButton.textContent === questions[currentQuestionIndex].answer;
    // if it is correct then add the 1 into the score
    if (isCorrect) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    //  This converts the list of buttons (which are children of the answerButtons element) into an array. 
    Array.from(answerButtons.children).forEach(button => {
        if (button.textContent === questions[currentQuestionIndex].answer) {
            button.classList.add("correct");
        }
        // after slecting one answer
        button.disabled = true;
    });
    // display next button 
    nextButton.style.display = "block";
}

function showScore() {
    // remove all the child nodes from the answerButtons container
    resetState();
    // display the score and next button  with the text "Play Again"
    questionElement.textContent = `You scored ${score} out of ${questions.length}`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
}



nextButton.addEventListener("click", function handleNextButton() {
    //This increases the number of the current question by 1. 
    currentQuestionIndex++;

    // This checks if there are still more questions left to display. It compares the current question number with the total number of questions.
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
});

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.style.display = "none";
}

startQuiz();
