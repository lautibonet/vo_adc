import { Component, OnInit } from '@angular/core';
import { Action } from '../model/action';
import { Globals } from '../extensions/globals';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DelegationService } from '../service-mock';
import { ServiceService } from '../service-mock';
import { Service } from '../model/service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'delegate-step-one',
  templateUrl: './delegate-step-one.html'
})
export class DelegateStepOne implements OnInit {
  title:string = "Administración de servicios";
  actions:Array<Action> = [];
  emailPattern:RegExp;
  shared_with:any[] = [];
  serviceFromDashboard:Service;
  model:any = {
    delegateOption: 0
  };
  documentTypeOptions:any[] = [
    { id: 1, display_name: "DNI" },
    { id: 2, display_name: "CUIT" }
  ];
  sexOptions:any[] = [
    { id: "M", display_name: "Masculino" },
    { id: "F", display_name: "Femenino" }
  ];

  constructor(
    private globals:Globals,
    private router: Router,
    private route:ActivatedRoute,
    private delegationService:DelegationService,
    private serviceService:ServiceService){

      this.emailPattern = globals.EMAIL_REGEX;
  }

  ngOnInit():void{
    this.shared_with.push({
      id: 1,
      name: "Martin",
      lastname: "Campano",
      fullname: "Martin Campano"
    });

    var identifier: string;
    this.route.params
        .subscribe((params: Params) => {
          identifier = params['identifier'];
          if (identifier) {
              this.serviceService.getServices()
                .subscribe(services => this.serviceFromDashboard = services.find(s => s.identifier == identifier.split('%2F').join('/')))
          }
        });
  }

  continue(){
    if(this.model.delegateOption != 0 ){
      var delegate = this.shared_with.find(d => d.id == this.model.delegateOption);
      this.model.name = delegate.name;
      this.model.lastname = delegate.lastname;
      this.model.documentNumber = 26010567
    }

    this.delegationService.setDelegate(this.model);

    this.router.navigate(["./select"], { relativeTo: this.route });
  }

}
