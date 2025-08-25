const $startButton = document.querySelector('.start-quiz')
const $questionContainerElement = document.querySelector('.question-conteiner')
const $answersContainer = document.querySelector('.answers-conteiner')
const $questionElement = document.querySelector('.question')
const $nextQuestionButton = document.querySelector('.next-question')

$startButton.addEventListener("click", startQuiz)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrectAnswers = 0

function startQuiz() {
    $startButton.classList.add("hide")
    $questionContainerElement.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()//limpa as perguntas e respostas anteriores

    if (currentQuestionIndex >= questions.length) {
    return finishQuiz()
    }


    $questionElement.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)
        newAnswer.addEventListener("click", selectAnswer)
    })
}
function resetState() {
     while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }
    document.body.classList.remove("correct", "incorrect")
    $nextQuestionButton.classList.add("hide")
}


function selectAnswer(event) {
    const answerClicled = event.target
    
    if(answerClicled.dataset.correct){
        document.body.classList.add("correct")
        totalCorrectAnswers++
    }
    else{
        document.body.classList.add("incorrect")
    }
    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        }
        else {
            button.classList.add("incorrect")
        }
        button.disabled = true
    })
    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishQuiz() {
    resetState()
    $questionElement.textContent = `Você acertou ${totalCorrectAnswers} de ${questions.length} perguntas!`
    $startButton.textContent = "Reiniciar"
    $startButton.classList.remove("hide")
    totalCorrectAnswers = 0
    currentQuestionIndex = 0
}




const questions = [
    {
        question: "Qual é a constante física que relaciona a energia de uma partícula com a frequência da sua onda?",
        answers: [
            { text: "Constante gravitacional", correct: false },
            { text: "Constante de Planck", correct: true },
            { text: "Velocidade da luz", correct: false },
            { text: "Constante de Avogadro", correct: false }
        ]
    },
    {
        question: "Quem formulou as três leis do movimento?",
        answers: [
            { text: "Galileu Galilei", correct: false },
            { text: "Johannes Kepler", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "Qual é o nome do livro em que René Descartes desenvolve a dúvida metódica?",
        answers: [
            { text: "Discurso do Método", correct: true },
            { text: "Ética", correct: false },
            { text: "Meditações Metafísicas", correct: false },
            { text: "Crítica da Razão Pura", correct: false }
        ]
    },
    {
        question: "Qual foi a principal causa da Guerra dos Cem Anos entre Inglaterra e França?",
        answers: [
            { text: "Expansão territorial na Itália", correct: false },
            { text: "Disputa dinástica pelo trono francês", correct: true },
            { text: "Controle do comércio de especiarias", correct: false },
            { text: "Diferenças religiosas", correct: false }
        ]
    },
    {
        question: "Qual desses elementos químicos é um gás nobre?",
        answers: [
            { text: "Argônio", correct: true },
            { text: "Oxigênio", correct: false },
            { text: "Flúor", correct: false },
            { text: "Nitrogênio", correct: false }
        ]
    },
    {
        question: "Quem é considerado o pai da genética moderna?",
        answers: [
            { text: "Charles Darwin", correct: false },
            { text: "Gregor Mendel", correct: true },
            { text: "James Watson", correct: false },
            { text: "Francis Crick", correct: false }
        ]
    },
    {
        question: "Qual é o país que possui a maior quantidade de vulcões ativos?",
        answers: [
            { text: "Itália", correct: false },
            { text: "Japão", correct: false },
            { text: "Indonésia", correct: true },
            { text: "Chile", correct: false }
        ]
    },
    {
        question: "Qual tratado marcou o fim da Primeira Guerra Mundial?",
        answers: [
            { text: "Tratado de Tordesilhas", correct: false },
            { text: "Tratado de Versalhes", correct: true },
            { text: "Paz de Westfália", correct: false },
            { text: "Tratado de Utrecht", correct: false }
        ]
    },
    {
        question: "Qual filósofo escreveu 'O Capital'?",
        answers: [
            { text: "Friedrich Engels", correct: false },
            { text: "Karl Marx", correct: true },
            { text: "Adam Smith", correct: false },
            { text: "Jean-Jacques Rousseau", correct: false }
        ]
    },
    {
        question: "Qual é o teorema que afirma que toda função contínua em um intervalo fechado atinge seu valor máximo e mínimo?",
        answers: [
            { text: "Teorema Fundamental do Cálculo", correct: false },
            { text: "Teorema de Bolzano", correct: false },
            { text: "Teorema de Rolle", correct: false },
            { text: "Teorema do Valor Extremo", correct: true }
        ]
    }
];
