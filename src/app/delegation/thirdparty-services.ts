import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service-mock';
import { RootService } from '../rootservice';
import { Action } from '../model/action';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'thirdparty-services',
  templateUrl: './thirdparty-services.html'
})
export class ThirdpartyServices implements OnInit {
  title:string = "Servicios compartidos por terceros";
  actions:Array<Action> = [];
  thirdpartyServicesGroupByOwner:any;
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
        this.thirdpartyServicesGroupByOwner = this.groupBy(services.filter(s => s.owner_id != u.id), 'owner_name');
        this.rootService.setLoadingPage(false);
      });
    });
  }

  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find((r) => r && r.key === v);
      if (el) {
        el.values.push(x);
      } else {
        rv.push({ key: v, values: [x] });
      }
      return rv;
    }, []);
  };

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    if(this.serviceServiceSubscription)
      this.serviceServiceSubscription.unsubscribe();
  }

}
