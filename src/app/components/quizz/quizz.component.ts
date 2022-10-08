import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  constructor() { }
  TituloPergunta:String = 'Titulo da pergunta';

  questions:any;
  QuestaoSelecionada:any = 'Questao selecionada';

  answers:string[] = [];
  answerSelected:string ="";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  ngOnInit(): void {
    if(quizz_questions) [
      this.finished = false,
      this.TituloPergunta = quizz_questions.title,

      this.questions = quizz_questions.questions,
      this.QuestaoSelecionada = this.questions[this.questionIndex],

      this.questionIndex = 0,
      this.questionMaxIndex = this.questions.length,

      console.log(this.questionIndex),
      console.log(this.questionMaxIndex),
    ]
  }

  playerChoose(value:string) {
    this.answers.push(value);
    this.nextStep();
  }

  nextStep() {
    this.questionIndex += 1;

    if(this.questionMaxIndex > this.questionIndex) {
      this.QuestaoSelecionada = this.questions[this.questionIndex];
    } else {
      this.finished = true;
      // TODO: VERIFICAR OPCAO GANHADORA
    }
  }

}
