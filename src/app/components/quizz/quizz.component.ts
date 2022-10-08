import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  constructor() { }
  TituloPergunta:String = 'Titulo da pergunta';
  QuestaoSelecionada:String = 'Questao selecionada';

  ngOnInit(): void {
  }

}
