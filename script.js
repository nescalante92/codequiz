var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var questionCon = document.getElementById("questionCon");
var questionEl = document.getElementById("question");
var answerBtn = document.getElementById("anserBtn");
var btnOne = document.getElementById("btnOne");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree");
var btnFour = document.getElementById("btnFour");
var count = 0;
var quizQuestions = [
    // // ----------Add If statements here
    {
        question: "Who is Marvel's biggest creator?",
        answers: [ // quizQuestions[1].answers
            "Peter Parker",
            "Stan Lee",
            "Bruce Banner",
            "Bruce Wayne",
        ],
        correct: "Stan Lee"
    },
    {
        question: "How much does Iron-Man love his daughter?",
        answers: [ // quizQuestions[3].answers
            "1000",
            "2000",
            "3000",
            "4000",
        ],
        correct: "3000"
    },
    {
        question: "Who's nick-name is Merc with a Mouth?",
        answers: [ // quizQuestions[1].answers
            "Spider-man",
            "Deadpool",
            "Wolverine",
            "Hulk",
        ],
        correct: "Deadpool"
    },
    {
        question: "Where is Scarlet Witch originally from?",
        answers: [ // quizQuestions[3].answers
            "Russia",
            "Slovenia",
            "Czech Republic",
            "Sokovia",
        ],
        correct: "Sokovia"
    },
    {
        question: "Who is the most famous Marvel Character?",
        answers: [ //quizQuestions[3].answers
            "Captain America",
            "Iron-Man",
            "Superman",
            "Spider-man",
        ],
        correct: "Spider-man"
    },
];
// this function starts the game
function startGame() {
    showQuestion();
}
startBtn.addEventListener("click", startGame);



// This function displays the questions
function showQuestion() {
    questionEl.textContent = quizQuestions[count].question;
    console.log(quizQuestions[count].answers[0]);
    document.getElementById("btnOne").textContent = quizQuestions[count].answers[0];
    console.log(quizQuestions[count].answers[1]);
    document.getElementById("btnTwo").textContent = quizQuestions[count].answers[1];
    console.log(quizQuestions[count].answers[2]);
    document.getElementById("btnThree").textContent = quizQuestions[count].answers[2];
    console.log(quizQuestions[count].answers[3]);
    document.getElementById("btnFour").textContent = quizQuestions[count].answers[3];  
}

function increaseCount() {
        count++
    if (count >= quizQuestions.length) {
        console.log("endgame") // incude end function
        endGame()
    } else {
    showQuestion();
    }
}

btnOne.addEventListener("click",increaseCount);
btnTwo.addEventListener("click",increaseCount);
btnThree.addEventListener("click",increaseCount);
btnFour.addEventListener("click",increaseCount);
    
    
function endGame() {
// incude end function
}

function checkAnswers () {
    var correctAnswer = quizQuestions[count].correct;
    //add if statement here
}

    























// if (answerBtn.correct) {
    //     console.log("correct")
    // }


// }
// //This function selects the answers
// function selectAnswer () {
// }

// //-----------local storage example------------------------------------
// var itemsEl = document.getElementById("items");

// var itemsStored = JSON.parse(localStorage.getItem("iteams")) || [];
// if (itemsEl) {
//     for (var i = 0; i < itemsEl.length; i ++) {
//         var item = items[i];
//         var liEl = document.createElement('li');
//         liEl.textContent = item;
//         itemsEl.appendChild(liEl);
//     }
// }
