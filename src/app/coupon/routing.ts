import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentCoupon }   from './payment-coupon';

const routes: Routes = [
  { path: 'coupon', component: PaymentCoupon }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PaymentCouponRoutingModule {}
