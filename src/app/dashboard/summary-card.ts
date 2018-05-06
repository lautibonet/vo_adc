import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { SummaryService } from '../service-mock';
import { UserSummary } from '../model/user-summary';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'summary-card',
  templateUrl: './summary-card.html'
})
export class SummaryCard implements OnInit, OnDestroy{
  @Output() ownerIdFilter = new EventEmitter();
  summaryServiceSubscription:Subscription;
  userSummaries:Array<UserSummary>;
  detailsShown: string = 'close';

  constructor(private summaryService:SummaryService){}

  ngOnInit():void{
    setTimeout(() => {
         this.getSummary();
     }, 0);
  }

  getSummary(){
    this.summaryServiceSubscription =
      this.summaryService.getSummary().subscribe(s => {
        this.userSummaries = s;
        // this.showDetails();
      });
  }

  showDetails() {
  	this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';
  }

  ngOnDestroy(){
    if(this.summaryServiceSubscription) this.summaryServiceSubscription.unsubscribe();
  }

  filter(ownerIdFilter){
    this.ownerIdFilter.next(ownerIdFilter);
  }

}
