import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InvoiceServicesList } from '../invoice/invoice-services-list';
import { DigitalInvoiceComponent }   from '../invoice/digital-invoice';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DigitalInvoiceComponent, InvoiceServicesList],
  exports: [
    DigitalInvoiceComponent, InvoiceServicesList
  ]
})
export class DigitalInvoiceModule {}
