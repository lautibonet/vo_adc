import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';

@Component({
  selector: 'blackout-questions',
  templateUrl: 'blackout-questions.html'
})
export class BlackoutQuestions implements DoCheck {
  @Input() model:any;
  @Output() modelChange = new EventEmitter();

  ngDoCheck(){
    this.modelChange.next(this.modelChange);
  }

  onlyCustomerChanged(){
    delete this.model.lowSwitch;
    delete this.model.wentBackDown;
    delete this.model.pillarExists;
    delete this.model.lowSwitchPillar;
    delete this.model.wentBackDownPillar;
    this.removeInstalationProblem();
  }

  lowSwitchChanged(){
    delete this.model.wentBackDown;
    delete this.model.pillarExists;
    delete this.model.lowSwitchPillar;
    delete this.model.wentBackDownPillar;
  }

  wentBackDownChanged(){
    delete this.model.pillarExists;
    delete this.model.lowSwitchPillar;
    delete this.model.wentBackDownPillar;
  }

  pillarExistsChanged(){
    delete this.model.lowSwitchPillar;
    delete this.model.wentBackDownPillar;
    this.removeInstalationProblem();
  }

  lowSwitchPillarChanged(){
    delete this.model.wentBackDownPillar;
    this.removeInstalationProblem();
  }

  wentBackDownPillarChanged(){
    this.removeInstalationProblem();
  }

  removeInstalationProblem(){
    delete this.model.instalation;
    delete this.model.problem;
  }
}
