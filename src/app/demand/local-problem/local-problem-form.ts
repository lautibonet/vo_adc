import { Component, OnInit } from '@angular/core';
import { Action } from '../../model/action';
import { ServiceService } from '../../service-mock';
import { Service } from '../../model/service';

@Component({
  selector: 'local-problem-form',
  templateUrl: './local-problem-form.html'
})
export class LocalProblemForm implements OnInit{
  title:string = "Nuevo Reclamo Técnico";
  actions:Array<Action> = [];
  services:Array<Service>;
  model:any = {};

  isInstalationSelected():boolean{
    return (this.model.instalation && this.model.instalation.id == 0) || (this.model.problem && (this.model.problem.danger || this.model.danger != undefined));
  }

  constructor (
    private serviceService:ServiceService
  ) { }

  ngOnInit():void{
    setTimeout(() => {
         this.getServices();
     }, 0);
  }

  getServices(): void {
    this.serviceService.getServices().subscribe(services => {
      this.services = services;
      this.services.forEach(service => {
        service.selected = true;
      });
    });
  }

}
