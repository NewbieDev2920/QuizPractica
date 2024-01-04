let QuizQuestions = new Map();
let quiz = {
  name: undefined,
  author: undefined,
  description: undefined,
  questions: QuizQuestions,
  answerKey: undefined,
};

const getNameAndDescription = () => {
  event.preventDefault()
  quiz.name = document.forms["create"]["quizz-name"].value;
  quiz.description = document.forms["create"]["quizz-description"].value;
  if(quiz.name != "" && quiz.description != ""){
     questionCreator()
  }
};

const questionCreator = () => {
  let creatorBox = document.getElementById("creator-box");
  let instructions = document.getElementById("create-instructions");
  creatorBox.innerHTML = `
     <form name = "create-question">
          <div class = "question-container">
          <input type = "text" id = "pregunta" placeholder = "Write your question here" class = "create-input" autocomplete = "off">
          </div>
          <div class = "answer-container">
               <input type = "text" placeholder = "Write your answer here" class = "create-input">
               <input type = "checkbox" class = "create-answer">
               <input type = "text" placeholder = "Write your answer here" class = "create-input">
               <input type = "checkbox" class = "create-answer">
               <input type = "text" placeholder = "Write your answer here" class = "create-input">
               <input type = "checkbox" class = "create-answer">
               <input type = "text" placeholder = "Write your answer here" class = "create-input">
               <input type  = "checkbox" class = "create-answer">
          </div>
          <div class = "button-container">
               <button>Previous Question</button>
               <button onClick= "addQuestion()">Next Question</button>
               <button onClick = "finish()">Finish</button>
          </div>     
          
     </form>`;
     instructions.setAttribute("style","display: none;");
};

const addQuestion = () => {
  event.preventDefault();
  input = document.getElementsByClassName("create-input");
  let question = input[0].value;

  if (QuizQuestions.length > 0) {
    QuizQuestions.forEach((value, key) => {
      if (key == question) {
        alert("No se puede agregar preguntas repitidas!");
      }
    });
  }

  let answer = [];
  for (let i = 1; i < input.length; i++) {
    answer.push(input[i].value);
  }
  QuizQuestions.set(question, answer);
  console.log(QuizQuestions);
};

const finish = () => {
  event.preventDefault();
  localStorage.setItem(quiz.name, quiz);
};
