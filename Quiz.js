const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which programming language is commonly used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    }
]

// step 2 Javascript Initialization

const quiz = document.querySelector('#quiz')
const answerEle = document.querySelectorAll('.answer');

// const [questionEle, option_1, option_2, option_3, option_4] =
//     document.querySelectorAll("#question, .option_1 ,.option_2,.option_3,.option_4,");

const questionEle = document.querySelector('#question')
console.log(questionEle);

const option_1 = document.querySelector('#option_1')
console.log(questionEle);

const option_2 = document.querySelector('#option_2')
console.log(option_2);

const option_3 = document.querySelector('#option_3')
console.log(option_3);

const option_4 = document.querySelector('#option_4')
console.log(option_4);


let submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

// Step 3 Load Quiz Function

const quizLoad = () => {
    const {question, options}   = quizQuestions[currentQuiz]
    console.log(question, options);

    questionEle.innerText = `${currentQuiz + 1}:${question}`

    options.forEach((currOption, index) => {
        window[`option_${index + 1}`].innerText = currOption
    })
}
quizLoad()

// Step4 Get Selected for Answer

const getSelectedOption = () => {
    // let ans_index;
    // answerEle.forEach((currOption, index) => {
    //     if (currOption.checked) {
    //         ans_index = index
    //     }

    // })
    // return ans_index

    let answerElement = Array.from(answerEle)
    return answerElement.findIndex((currEle, index) => {

        return currEle.checked
    })
}

const deSelectedAnswer = () => {
    return answerEle.forEach((currEle) => {
        currEle.checked = false
    })
}


submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption()
    console.log("ss", quizQuestions[currentQuiz]["options"][selectedOptionIndex], quizQuestions[currentQuiz].correctAnswer);

    if (quizQuestions[currentQuiz]["options"][selectedOptionIndex] === quizQuestions[currentQuiz].correctAnswer) {
        score += 1
    }

    currentQuiz++;
    //console.log("ssss", currentQuiz, quizQuestions.length, currentQuiz < quizQuestions.length)
    if (currentQuiz < quizQuestions.length) {
        deSelectedAnswer()
        quizLoad()
    } else {
        quiz.innerHTML = `
        <div class="result">
            <h2>Your Score: ${score}/${quizQuestions.length}</h2>
            <p>Congratulations to won the quiz</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>
`
    }
    //debugger;
})