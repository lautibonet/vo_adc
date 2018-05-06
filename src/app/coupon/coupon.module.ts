import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PaymentCoupon } from './payment-coupon';
import { BillingModule } from '../billing/billing.module';

@NgModule({
  imports: [
    SharedModule, BillingModule
  ],
  declarations: [PaymentCoupon],
  exports: [
    PaymentCoupon
  ]
})
export class CouponModule {}
