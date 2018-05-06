import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service-mock';
import { Service } from '../../model/service';
import { Action } from '../../model/action';

@Component({
  selector: 'voltage-problems-form',
  templateUrl: './voltage-problems-form.html'
})
export class VoltageProblemsForm implements OnInit{
  title:string = "Nuevo Reclamo Técnico";
  actions:Array<Action> = [];
  services:Array<Service>;
  model:any = {};

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
