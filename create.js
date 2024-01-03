
let QuizQuestions = new Map();
let quiz = {
     name : quizzName,
     author : undefined,
     description: descrip,
     questions : quizQuestions,
     answerKey: undefined
}

function getNameAndDescription(){
     quiz.name = document.forms["create"]["quizz-name"].value;     
     quiz.description = document.forms["create"]["quizz-description"].value;
}

function questionCreator(){
     let creatorBox = document.getElementById('creator-box');
     creatorBox.innerHTML = `
     <form name = "create-question">
          <div class = "question-container">
          <input type = "text" id = "pregunta" placeholder = "Write the question here" class = "create-input" autocomplete = "off">
          </div>
          <div class = "answer-container">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
               <input type = "text" placeholder = "Write the answer here" class = "create-input">
          </div>
          <div class = "button-container">
               <button>Previous Question</button>
               <button onClick= "addQuestion()">Next Question</button>
               <button onClick = "finish()">Finish</button>
          </div>     
          
     </form>`;
}

const addQuestion = () => {
     event.preventDefault();
     input = document.getElementsByClassName('create-input');
     let question = input[0].value;
     let answer = [];
     for(let i = 1; i < input.length; i++){
          answer.push(input[i].value);
     }
     QuizQuestions.set(question,answer);
     console.log(QuizQuestions);
     
};



const finish = () => {
     event.preventDefault();
     localStorage.setItem(quiz.name, quiz)

}
