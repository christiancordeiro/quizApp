const quizApp = [
  {
    question: "Qual é a capital do Brasil?",
    a: "Buenos Aires",
    b: "Brasília",
    c: "Rio de Janeiro",
    d: "São Paulo",
    correct: "Brasília",
  },
  {
    question: "Qual é o maior planeta do nosso sistema solar?",
    a: "Terra",
    b: "Júpiter",
    c: "Marte",
    d: "Saturno",
    correct: "Júpiter",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    a: "Vincent van Gogh",
    b: "Leonardo da Vinci",
    c: "Pablo Picasso",
    d: "Michelangelo",
    correct: "Leonardo da Vinci",
  },
  {
    question: "Qual é o maior oceano do mundo?",
    a: "Oceano Atlântico",
    b: "Oceano Índico",
    c: "Oceano Antártico",
    d: "Oceano Pacífico",
    correct: "Oceano Pacífico",
  },
  {
    question: "Qual é o maior animal terrestre?",
    a: "Elefante africano",
    b: "Girafa",
    c: "Rinoceronte",
    d: "Oceano Pacífico",
    correct: "Elefante africano",
  },
  {
    question:
      "Qual é o segundo planeta do nosso sistema solar a partir do sol?",
    a: "Vênus",
    b: "Marte",
    c: "Júpiter",
    d: "Saturno",
    correct: "Vênus",
  },
]

const question = document.querySelector(".container h2")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let index = 0

loadQuiz()

function loadQuiz() {
  // Remove a alternativa marcada anteriormente, para a próxima pergunta ficar sem a marcação.
  document.querySelectorAll('input[type="radio"]').forEach((radioButton) => {
    radioButton.checked = false
  })

  question.innerText = quizApp[index].question

  a_text.innerText = quizApp[index].a
  b_text.innerText = quizApp[index].b
  c_text.innerText = quizApp[index].c
  d_text.innerText = quizApp[index].d
}

const btn = document.getElementById("btn")

function clickBtn() {
  removeCorrectClassFromAll()
  index++

  if (index < quizApp.length) {
    loadQuiz()
  } else {
    // TODO: quantidade de questões acertadas.
    alert("Você terminou o Quiz!")
  }
}

function removeCorrectClassFromAll() {
  const li = document.querySelectorAll(".alternatives ul li")
  li.forEach((item) => {
    item.classList.remove("correct")
  })
}

function checkCorrectAlternative(event) {
  const selectedLabel = event.currentTarget.closest("li").querySelector("label")
  const selectedValue = selectedLabel ? selectedLabel.innerText : null

  const li = document.querySelectorAll(".alternatives ul li")
  const correctAnswer = quizApp[index].correct

  li.forEach((item) => {
    if (item === event.currentTarget.closest("li")) {
      if (selectedValue === correctAnswer) {
        item.classList.add("correct")
        console.log("Resposta correta!")
      } else {
        console.log("Resposta incorreta.")
      }
    }
  })
}

document.querySelectorAll('input[type="radio"]').forEach((radioButton) => {
  radioButton.addEventListener("click", checkCorrectAlternative)
})
