import { Component, Input } from '@angular/core';
import { Receipt } from '../model/receipt';
import { MdDialog } from '@angular/material';
import { ReceiptModal } from '../shared/utils/receipt-modal';

@Component({
  selector: 'receipts-history-list',
  templateUrl: './receipts-history-list.html'
})
export class ReceiptsHistoryList{
  @Input() receipts:Receipt[];

  isOverdueReceipt(due_date_string):boolean{
    var parts:any[] = due_date_string.split('/');
    //please pay attention to parts[1]-1. Javascript counts months starting form 0.
    var due_date = new Date(parts[2],parts[1]-1, parts[0]);

    return new Date() > due_date;
  }

  constructor(public dialog: MdDialog) {}

  viewReceipt() {
      this.dialog.open(ReceiptModal, {
        data: {path: '../assets/images/factura.jpg'}
      });
    }
}
