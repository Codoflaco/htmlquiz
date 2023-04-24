const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions,currentQuestionIndex;
let quizScore =0;
 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setnextQuestion();
});

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText=question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        if( answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

 function selectAnswer(e){
    const selectedButton=e.target;
    const correct =selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct);
    }) 
    if(shuffledQuestions.lenght > currentQuestionIndex +1){
        nextButton.classList.remove('hide');
    }else {
        startButton.innerText='restart';
        startButton.classList.remove('hide');
    }
    if(selectedButton.dataset = correct) {
        quizScore++;
    }
    document.getElementById('right-answers').innerText=quizScore;
 }

function setStatusClass(element,correct) {
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
    }

const questions = [
    {
        question: "Cual de los siguientes personajes fue juez?",
        answers:[
            {text: "Oseas", correct: false},
            {text: "David", correct: false},
            {text: "Barac", correct: true},
            {text: "Samuel", correct: false}
        ],
    },
    {
        question: "Quien fue un soldado romano?",
        answers:[
            {text: "Nicodemo", correct: false},
            {text: "Jairo", correct: false},
            {text: "Cornelio", correct: true},
            {text: "José de Arimatea", correct: false}
            
        ],
    },
    {
        question: "QUien fue el compañero de Josue que dio un buen informe?",
        answers:[
            {text: "Caleb", correct: true},
            {text: "Jefuné", correct: false}
        ],
    },
    {
        question: "Quien fue una mujer sensata casada con un inútil?",
        answers:[
            {text: "Débora", correct: false},
            {text: "Jael", correct: false},
            {text: "Abigail", correct: true},
            {text: "Jezabel", correct: false}
        ],
    },
    {
        question: "Quien fue el compañero que apoyo a Jehu en acabar con la adoración de Baal?",
        answers:[
            {text: "Abisai", correct: false},
            {text: "Bitcar", correct: false},
            {text: "Jeonadab", correct: true},
            {text: "Husai", correct: false}
        ],
    },
    {
        question: "Cual de lo siguiente estaba dentro del arca del pacto?",
        answers:[
            {text: "Incienso", correct: false},
            {text: "Oro", correct: false},
            {text: "Mirra", correct: false},
            {text: "La vara de Aaron", correct: true}
        ],
    }
]