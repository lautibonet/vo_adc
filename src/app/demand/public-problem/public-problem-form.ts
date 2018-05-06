import { Component } from '@angular/core';
import { Action } from '../../model/action';

@Component({
  selector: 'public-problem-form',
  templateUrl: './public-problem-form.html'
})
export class PublicProblemForm {
  title:string = "Nuevo Reclamo Técnico";
  actions:Array<Action> = [];
  model:any = {};

  isInstalationSelected():boolean{
    return (this.model.instalation && this.model.instalation.id == 0) || (this.model.problem && (this.model.problem.danger || this.model.danger != undefined));
  }

}
