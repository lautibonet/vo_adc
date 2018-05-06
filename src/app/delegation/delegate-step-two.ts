import { Component, OnInit } from '@angular/core';
import { Action } from '../model/action';
import { DelegationService, ServiceService } from '../service-mock';
import { RootService } from '../rootservice';
import { Service } from '../model/service';

@Component({
  selector: 'delegate-step-two',
  templateUrl: './delegate-step-two.html'
})
export class DelegateStepTwo implements OnInit{
  title:string = "Administración de servicios";
  actions:Array<Action> = [];
  services:Array<Service>;
  delegatedServices:Array<Service>;
  model:any = {};

  constructor(
    private delegationService:DelegationService,
    private serviceService:ServiceService,
    private rootService:RootService
  ){}

  ngOnInit():void{
    this.delegationService.delegate$
    .subscribe(delegate => {
        this.model = delegate;
        this.model.fullname = delegate.name + " " + delegate.lastname;
    });

    setTimeout(() => {
         this.getServices();
     }, 0);
  }

  noServiceSelected():boolean{
    return this.services && this.services.filter(s => s.selected).length == 0;
  }

  getServices(): void {
    this.serviceService.getServices().subscribe(services => {
      this.rootService.loggedUser$.subscribe(u => {
        this.services = services.filter(s => s.owner_id == u.id);

        if(this.model.delegateOption != 0){
          this.delegatedServices = this.services.splice(1, 1);
        }
      })

    });
  }
}
