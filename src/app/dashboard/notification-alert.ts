import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('expandCollapse', [
         state('open', style({
             'height': '*'
         })),
         state('close', style({
             'height': '0px',
             'overflow': 'hidden',
             'display': 'none'
         })),
         transition('open => close', animate('200ms ease-out'))
     ])
  ],
  selector: 'notification-alert',
  templateUrl: './notification-alert.html'
})
export class NotificationAlert{
  alertShown:string = 'open';

  closeAlert() {
  	 this.alertShown = 'close';
  }

}
