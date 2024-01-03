let QuizQuestions = new Map();
let quiz = {
  name: quizzName,
  author: undefined,
  description: descrip,
  questions: quizQuestions,
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
  creatorBox.innerHTML = `
     <form name = "create-question">
          <div class = "question-container">
          <input type = "text" id = "pregunta" placeholder = "Write the question here" class = "create-input" autocomplete = "off">
          </div>
          <div class = "answer-container">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type = "checkbox">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type = "checkbox">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type = "checkbox">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type  = "checkbox">
          </div>
          <div class = "button-container">
               <button>Previous Question</button>
               <button onClick= "addQuestion()">Next Question</button>
               <button onClick = "finish()">Finish</button>
          </div>     
          
     </form>`;
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
