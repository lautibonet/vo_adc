import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DemandService } from '../service-mock';
import { Demand } from '../model/demand';

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
  selector: 'demand-card',
  templateUrl: './demand-card.html'
})
export class DemandCard implements OnInit{
  @Input() demand:Demand[];
  detailsShown:string = 'close';

  ngOnInit(){  }

  showDetails() {
  	this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';
  }
}
