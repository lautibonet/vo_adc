import { NgModule }             from '@angular/core';
import { ReceiptModal } from './receipt-modal';
import { CurrencyFormat } from './currency-pipe';
import { ServiceFilterPipe } from './service-filter-pipe';
import { FilterPipe } from './filter-pipe';

@NgModule({
  imports: [],
  declarations: [ReceiptModal, CurrencyFormat, ServiceFilterPipe, FilterPipe],
  exports: [
    CurrencyFormat, ServiceFilterPipe, FilterPipe
  ],
  entryComponents: [ReceiptModal]
})
export class UtilsModule {}
