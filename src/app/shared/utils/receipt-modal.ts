import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'receipt-modal',
  template: '<img [src]="data.path" />',
})
export class ReceiptModal {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

}
