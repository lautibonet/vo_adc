import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Service } from '../model/service';
import { Receipt } from '../model/receipt';
import { ReceiptService } from '../service-mock';

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
  selector: 'bill-card',
  templateUrl: './bill-card.html'
})
export class BillCard implements OnInit{
  @Input() service:Service;
  @Input() idx:number;
  @Input() showStatus:boolean = true;
  receipts:Receipt[];
  detailsShown: string = 'close';

  constructor(
    private receiptService:ReceiptService
  ) { }

  ngOnInit():void{
    if(this.idx == 0)
      this.showDetails();
  }

  getReceipts(): void {
    this.receiptService.getReceipts().subscribe(receipts => this.receipts = receipts.filter(r => r.identifier == this.service.identifier));
  }

  showDetails() {
  	this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';

    if(!this.receipts)
      setTimeout(() => {
               this.getReceipts();
           }, 0);
  }

}
