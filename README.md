<h1>Fundamentals of JavaScript</h1>
<img src="/img.jpg" alt="image containg some JavaScript codes" width="100%">

<p>
    For this week's milestone, focusing on the fundamentals of JavaScript, you will apply what you've learned by building a simple, interactive webpage.
    This project will incorporate JavaScript syntax, control structures, basic functions, DOM manipulation, and event handling.
    You'll be tasked with creating two features for this webpage: a basic quiz application and a simple calculator.
</p>


<!-- FIRST TASK -->
<h1>TASKS</h1>
<h2>0. Implemente a Simple interactive Quiz</h2>

<h1>Requirement</h1>
<ul>
    <li>Create a GitHub Repo with a name ALX_Simple_Quiz</li>
    <li>Make sure to start the repo with files index.html and styles.html on the same directory</li>
</ul>

<p>
    Your task is to implement the JavaScript functionality for a quiz application.
    You will be working with the provided HTML and CSS template, which structures and styles the quiz. Your goal is to bring this quiz to life, making it interacive and functional.
    Given the final explected JavaScript output for the Simple Interactive Quiz task,let's create a set of explicit instructions. These will guide the learners to produce the exact code, ensuring uniform submissions suitable for automated checking.
</p>

<h2>Your Task</h2>
<p>
    Create a JavaScript function named checkAnswer for a quiz application that checks if the user's selected answer is correct and displays appropriate feedback. You will also add an event listener to the “Submit Answer” button to invoke this function when clicked.
</p>
<h2>Detailed Instructions</h2>
<ol>
    <li>Start with the Function Declaration:</li>
    <ul>
        <li>Define a function named checkAnswer. This function will be called when the user submits their answer</li>
    </ul>
    function checkAnswer() {
        // Function body
    }
</ol>

<ol>
    <li>Identify the Correct Answer:</li>
    <ul>
        <li>Inside the checkAnswer function, declare a variable named correctAnswer and assign it the string value "4". This represents the correct answer to your quiz question.</li>
    </ul>
    <li>Retrieve the User's Answer:</li>
    <ul>
        <li>
            Use document.querySelector to select the checked radio button by its name attribute name="quiz". Since radio inputs are used for the answers, this will effectively capture the user's selection.
        </li>
        <li>
            Access the value property of the selected radio button to get the user's answer. Store this value in a variable named userAnswer.
        </li>
    </ul>
    <li>Compare the User's Answer with the Correct Answer</li>
    <ul>
        <li>
            Implement an if statement to compare userAnswer with correctAnswer.
        </li>
        <ul>
            <li>
                If the values match, indicating the user’s answer is correct, change the textContent of the element with the ID feedback to "Correct! Well done.".
            </li>
            <li>
                If the values do not match, indicating the user’s answer is incorrect, update the textContent of the feedback element to "That's incorrect. Try again!".
            </li>
        </ul>
    </ul>
    <li>Add an Event Listener to the Submit Button:</li>
    <ul>
        <li>
            Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
        </li>
        <li>
            Add a click event listener to this button, passing in the checkAnswer function as the callback to be executed when the button is clicked. Ensure you are not calling the checkAnswer function directly in the event listener (i.e., do not add () after the function name in the addEventListener call).
        </li>
    </ul>
</ol>

<h3>Repo:</h3>
<ul>
    <li>
        GitHub repository: ALX_Simple_Quiz
    </li>
    <li>
        File: styles.css, index.html, quiz.js
    </li>
</ul>


<!-- SECOND TASK -->
<h2>1. Build a Simple Calculator</h2>
<h3>Repo:</h3>
<ul>
    <li>
        GitHub repository: ALX_Simple_Quiz
    </li>
    <li>
        File: calculator.html, calculator.css, calculator.js
    </li>
</ul>