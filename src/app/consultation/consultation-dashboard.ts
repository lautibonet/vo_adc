import { Component, OnInit } from '@angular/core';
import { Action } from '../model/action';
import { ConsultationService } from '../service-mock';
import { Consultation } from '../model/consultation';

@Component({
  selector: 'consultation-dashboard',
  templateUrl: './consultation-dashboard.html',

})
export class ConsultationDashboard implements OnInit{
  title:string = "Consulta";
  actions:Array<Action> = [];
  consultations:Array<Consultation>;

  constructor(private consultationService:ConsultationService){  }

  ngOnInit(){
    this.consultationService.getConsultations().subscribe(c => {
      this.consultations = c;
    });
  }
}
