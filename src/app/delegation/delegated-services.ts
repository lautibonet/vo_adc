import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from '../service-mock';
import { RootService } from '../rootservice';
import { Action } from '../model/action';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'delegated-services',
  templateUrl: './delegated-services.html'
})
export class DelegatedServices implements OnInit {
  title:string = "Servicios delegados";
  actions:Array<Action> = [];
  delegatedServices:Array<Service>;
  serviceServiceSubscription:Subscription;

  constructor(private serviceService:ServiceService, private rootService:RootService){
    this.rootService.setLoadingPage(true);
  }

  ngOnInit():void{
    setTimeout(() => {
         this.getServices();
     }, 0);
  }

  getServices(): void {

    this.serviceServiceSubscription = this.serviceService.getServices().subscribe(services => {
      this.rootService.loggedUser$.subscribe(u => {
        this.delegatedServices = services.filter(s => s.owner_id == u.id && s.shared_with);
        this.rootService.setLoadingPage(false);
      });
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    if(this.serviceServiceSubscription)
      this.serviceServiceSubscription.unsubscribe();
  }

}
