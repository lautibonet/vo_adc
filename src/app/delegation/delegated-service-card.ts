import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Service } from '../model/service';
import { Delegation } from '../model/delegation';
import { DelegationService } from '../service-mock';
import { Subscription } from 'rxjs/Subscription';

@Component({
  animations: [
    trigger('expandCollapse', [
         state('open', style({
             'height': '*'
         })),
         state('close', style({
             'height': '0px',
             'overflow': 'hidden'
         })),
         transition('open <=> close', animate('200ms ease-out'))
     ])
  ],
  selector: 'delegated-service-card',
  templateUrl: './delegated-service-card.html'
})
export class DelegatedServiceCard implements OnInit, OnDestroy {
  @Input() service:Service;
  @Input() idx:number;
  delegations:Array<Delegation>;
  delegationSuscription:Subscription;
  detailsShown: string = 'close';

  constructor(private delegationService:DelegationService){}

  ngOnInit():void{
    if(this.idx == 0)
      this.showDetails();
  }

  getDelegations(){
    this.delegationSuscription = this.delegationService.getDelegations().subscribe(delegations => {
      this.delegations = delegations.filter(d => d.identifier == this.service.identifier);
      console.log(this.delegations);
    });
  }

  showDetails() {
  	this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';

    if(!this.delegations)
      setTimeout(() => {
               this.getDelegations();
           }, 0);
  }

  ngOnDestroy(){
    if(this.delegationSuscription) this.delegationSuscription.unsubscribe();
  }
}
