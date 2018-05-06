import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BillingComponent } from './billing-component';
import { ReceiptsHistoryList } from './receipts-history-list';
import { BillCard } from './bill-card';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [BillingComponent, BillCard, ReceiptsHistoryList],
  exports: [
    BillingComponent, BillCard, ReceiptsHistoryList
  ]
})
export class BillingModule {}
