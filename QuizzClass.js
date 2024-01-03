export class Quizz {
  constructor(name, author, question, answerKey) {
    this.name = name;
    this.author = author;
    this.questions = question;
    this.answerKey = answerKey;
    const test = () => {
      console.log("Yes, im a quiz")
    }
  }
  
}
