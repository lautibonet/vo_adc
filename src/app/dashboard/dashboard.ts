import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ServiceService } from '../service-mock';
import { Service } from '../model/service';
import { Subscription } from 'rxjs/Subscription';
import {RootService} from '../rootservice';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit, OnDestroy{
  servicesObservable:Observable<Array<Service>>;
  serviceServiceSubscription:Subscription;
  services:Array<Service>;
  searchValue:string;
  ownerIdFilter:number = -1;
  hasDelegatedServices:boolean;

  constructor (
    private serviceService:ServiceService,
    private rootService:RootService
  ) {
  }


  ngOnInit(): void {
    this.rootService.setLoadingPage(true);

    setTimeout(() => {
         this.getServices();
     }, 0);

  }

  getServices(): void {

    this.serviceServiceSubscription = this.serviceService.getServices().subscribe(services => {
      this.services = services;

      this.rootService.loggedUser$.subscribe(u => {
        this.hasDelegatedServices = (this.services.filter(s => s.owner_id == u.id)).length > 0;
        this.rootService.setLoadingPage(false);
      });
    });
  }

  filter(ownerIdFilter){
    this.ownerIdFilter = ownerIdFilter;
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    if(this.serviceServiceSubscription)
      this.serviceServiceSubscription.unsubscribe();
  }
}
