import { Component, OnInit } from '@angular/core';
import { DemandService } from '../service-mock';
import { Demand } from '../model/demand';
import { Action } from '../model/action';

@Component({
  selector: 'demand-dashboard',
  templateUrl: './demand-dashboard.html',

})
export class DemandDashboard implements OnInit{
  title:string = "Reclamos Técnicos";
  actions:Array<Action> = [];
  demands:Demand[];

  constructor(private demandService:DemandService){  }

  ngOnInit(){
    this.demandService.getDemands().subscribe(d => {
      this.demands = d;
    });
  }
}
