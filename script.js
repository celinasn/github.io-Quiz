// Questions that will be asked
const Questions = [{
    q: "Who won Latin Artist of the Year 2023?",
    a: [{ text: "Karol G", isCorrect: false },
    { text: "Shakira", isCorrect: false },
    { text: "Bad Bunny", isCorrect: true },
    { text: "JBalvin", isCorrect: false }
    ]
 
},
{
    q: "Who won Top Latin Female Artist in 2023?",
    a: [{ text: "Shakira", isCorrect: false, isSelected: false },
    { text: "Young Miko", isCorrect: false },
    { text: "Rosalia", isCorrect: false },
    { text: "Karol G", isCorrect: true }
    ]
 
},
{
    q: "Who won Song of the Year?",
    a: [{ text: "Karol G - Manana Sera Bonito", isCorrect: false },
    { text: "Peso Pluma - Ella Baila Sola", isCorrect: false },
    { text: "Bad Bunny - Tití Me Preguntó", isCorrect: true },
    { text: "Feid - Feliz Cumpleanos", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}