var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var questionCon = document.getElementById("questionCon");
var questionEl = document.getElementById("question");
var answerBtn = document.getElementById("anserBtn");


// this function starts the game
function startGame () {
    questionEl= quizQuestions
    var quizQuestions = [
        {
            question: "Who is Marvel's biggest creator?",
            a: "Peter Parker" === false,
            b: "Stan Lee" === true,
            c: "Bruce Banner" === false,
            d: "Bruce Wayne" === false,
        },
        // ----------Add If statements here
        {
            question: "How much does Iron-Man love his daughter?",
            a: "1000"=== false,
            b: "2000"=== false,
            c: "3000"=== true,
            d: "4000"=== false,
        },// ----------Add If statements here
        {   question: "Who's nick-name is Merc with a Mouth?",
            a:"Spider-man"=== false,
            b:"Deadpool"=== true,
            c:"Wolverine"=== false,
            d:"Hulk"=== false,
        },
        {// ----------Add If statements here
            question: "Where is Scarlet Witch originally from?",
            a:"Russia"=== false,
            b:"Slovenia"=== false,
            c:"Czech Republic"=== false,
            d:"Sokovia"=== true,
        },
        {// ----------Add If statements here
            question: "Who is the most famous Marvel Character?",
            a:"Captain America"=== false,
            b:"Iron-Man"=== false,
            c:"Superman"=== false,
            d:"Spider-man"=== true,
        },
    ];
}

//This function displays the questions
function showQuestion () {
    selectedQuestion = quizQuestion [Math.floor(Math.random() * quizQuestion.length)];
    correctAnswers = true;
    if (answerBtn.correct) {
        console.log("correct")
    }
    

}
//This function selects the answers
function selectAnswer () {
   
        
}




























