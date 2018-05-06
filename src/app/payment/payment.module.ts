import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PaymentSelect } from '../payment/payment-select';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PaymentSelect],
  exports: [
    PaymentSelect
  ]
})
export class PaymentModule {}
