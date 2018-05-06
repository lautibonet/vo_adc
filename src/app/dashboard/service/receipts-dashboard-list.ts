import { Component, Input, OnInit } from '@angular/core';
import { Receipt } from '../../model/receipt';
import { MdDialog } from '@angular/material';
import { ReceiptModal } from '../../shared/utils/receipt-modal';

@Component({
  selector: 'receipts-dashboard-list',
  templateUrl: './receipts-dashboard-list.html'
})
export class ReceiptsDashboardList implements OnInit{
  @Input() receipts:Receipt[];

  constructor(public dialog: MdDialog) {}

  ngOnInit():void{
    this.receipts.forEach(receipt => {
      receipt.selected = true;
    });
  }

  viewReceipt() {
    this.dialog.open(ReceiptModal, {
      data: {path: '../assets/images/factura.jpg'}
    });
  }

  isOverdueReceipt(due_date_string):boolean{
    var parts:any[] = due_date_string.split('/');
    //please pay attention to parts[1]-1. Javascript counts months starting form 0.
    var due_date = new Date(parts[2],parts[1]-1, parts[0]);

    return new Date() > due_date;
  }
}
