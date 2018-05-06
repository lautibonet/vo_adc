import { Component, OnDestroy } from '@angular/core';
import { ServiceService } from '../service-mock';
import { Service } from '../model/service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'social-rate-form',
  templateUrl: './social_rate_form.html',

})
export class SocialRateForm implements OnDestroy{
  model:any = {};
  serviceResult:Service;
  serviceServiceSubscription:Subscription;
  submitted:boolean = false;
  loading:boolean = false;

  constructor (
    private serviceService:ServiceService
  ) { }

  submit(){
    this.submitted = this.loading = true;

    setTimeout(() => {
      this.serviceServiceSubscription = this.serviceService.getServices().subscribe(services => {
        this.serviceResult = services.find(s => s.identifier == this.model.serviceNumber);
        this.loading = false;
      });
    }, 0);

  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    if(this.serviceServiceSubscription)
      this.serviceServiceSubscription.unsubscribe();
  }
}
