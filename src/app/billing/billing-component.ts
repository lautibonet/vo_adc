import { Component, OnInit, OnDestroy } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from '../service-mock';
import {RootService} from '../rootservice';
import { Subscription } from 'rxjs/Subscription';
import {Action} from '../model/action';

@Component({
  selector: 'billing',
  templateUrl: './billing-component.html'
})
export class BillingComponent implements OnInit, OnDestroy{
  services:Service[];
  serviceServiceSubscription:Subscription;
  title:string = "Historial de Facturación";
  actions:Array<Action> = [];

  constructor (
    private serviceService:ServiceService,
    private rootService:RootService
  ) { this.rootService.setLoadingPage(true); }

  ngOnInit(): void {
    setTimeout(() => {
         this.getServices();
     }, 0);
  }

  getServices(): void {
    this.serviceServiceSubscription = this.serviceService.getServices().subscribe(services => {
      this.services = services, error => console.log(error);
      this.rootService.setLoadingPage(false);
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    if(this.serviceServiceSubscription) this.serviceServiceSubscription.unsubscribe();
  }
}
