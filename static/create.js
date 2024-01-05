
let quiz = {
  name: undefined,
  author: undefined,
  description: undefined,
  questions: [],
  answerKey: [],
};

const getNameAndDescription = () => {
  event.preventDefault();
  quiz.name = document.forms["create"]["quizz-name"].value;
  quiz.description = document.forms["create"]["quizz-description"].value;
  if (quiz.name != "" && quiz.description != "") {
    questionCreator();
  }
  else{
    alert("Debes ponerle nombre y descripcion a tu quiz!");
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
  instructions.setAttribute("style", "display: none;");
};

const addQuestion = () => {
  // Transform to map

  event.preventDefault();
  let inputCollection = document.getElementsByClassName("create-input");
  let question = inputCollection[0].value;
  console.log(quiz.questions.length);
  if (quiz.questions.length > 0) {
    quiz.questions.forEach((value, key) => {
      if (key == question) {
        alert("No se pueden agregar preguntas repitidas!");
      }
    });
  }

  let answers = [];
  for (let i = 1; i < inputCollection.length; i++) {
    answers.push(inputCollection[i].value);
  }
  let bundle = [];
  bundle.push(question, answers);
  quiz.questions.push(bundle);
  console.log(quiz.questions);

  // Transform to matrix

  let checkboxes = document.getElementsByClassName("create-answer");
  let answerCollection = [];

  for (let i = 0; i < checkboxes.length; i++) {
    answerCollection.push(checkboxes[i].checked);
  }

  quiz.answerKey.push(answerCollection);
  console.log(quiz.answerKey);
  resetInput(inputCollection, checkboxes)
};

const finish = () => {
  event.preventDefault();
  localStorage.setItem(quiz.name, JSON.stringify(quiz));
  console.log(localStorage);
  alert("Tu quiz fue creado!");
  fetch("templates\index.html");
};

const resetInput = (HTMLinputs, HTMLcheckboxes) => {
  for (let i = 0; i < HTMLinputs.length; i++) {
    HTMLinputs[i].value = "";
  }
  for (let i = 0; i < HTMLinputs.length; i++) {
    HTMLcheckboxes[i].checked = false;
  }
};
