import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Service } from '../model/service';

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
  selector: 'thirdparty-service-card',
  templateUrl: './thirdparty-service-card.html'
})
export class ThirdpartyServiceCard implements OnInit {
  @Input() owner:string;
  @Input() services:Array<Service>;
  @Input() idx:number;
  detailsShown: string = 'close';

  ngOnInit():void{
    if(this.idx == 0)
      this.showDetails();
  }

  showDetails() {
  	this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';
  }
}
