import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';

@Component({
  selector: 'voltage-problems-questions',
  templateUrl: 'voltage-problems-questions.html'
})
export class VoltageProblemsQuestions implements DoCheck {
  @Input() model:any;
  @Output() modelChange = new EventEmitter();

  sinceOptions:any[] = [
    "Recientemente",
    "Más de una semana",
    "Más de 15 días"
  ];
  momentOptions:any[] = [
    "Mañana",
    "Tarde",
    "Noche",
    "Todo el día"
  ];

  ngDoCheck(){
    this.modelChange.next(this.modelChange);
  }
}
