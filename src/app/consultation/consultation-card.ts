import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Consultation } from '../model/consultation';

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
  selector: 'consultation-card',
  templateUrl: './consultation-card.html'
})
export class ConsultationCard{
  @Input() consultation:Consultation;
  detailsShown:string = 'close';
  expandedConsultationId:number;

  showDetails() {
    this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';
  }

  expandConsultation(idx){
    if(idx == this.expandedConsultationId){
      this.expandedConsultationId = -1;
      return;
    }

    this.expandedConsultationId = idx;
  }

  activityExpandCollapse(idx){
    return (idx == this.expandedConsultationId) ? 'open' : 'close';
  }
}
