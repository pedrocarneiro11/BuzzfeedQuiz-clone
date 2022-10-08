import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  constructor() { }
  TituloPergunta:String = 'Titulo da pergunta';

  Questao:any;
  QuestaoSelecionada:any = 'Questao selecionada';

  answers:string[] = [];
  answerSelected:string ="";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  ngOnInit(): void {
  }

}
