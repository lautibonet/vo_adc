import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSelect }   from '../payment/payment-select';

const routes: Routes = [
  { path: 'payment',  component: PaymentSelect }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PaymentSelectRoutingModule {}
