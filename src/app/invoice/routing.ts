import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalInvoiceComponent }   from '../invoice/digital-invoice';

const routes: Routes = [
  { path: 'invoice/setup',  component: DigitalInvoiceComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class invoiceRoutingModule {}
