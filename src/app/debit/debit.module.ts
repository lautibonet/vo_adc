import { AutomaticDebitComponent } from '../debit/automatic-debit-component';
import { CancelAutomaticDebitComponent } from '../debit/cancel-automatic-debit';
import { DebitServicesList } from '../debit/debit-services-list';
import { DebitAcccesionsList } from '../debit/debit-accessions-list';
import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
  AutomaticDebitComponent, DebitServicesList, CancelAutomaticDebitComponent, DebitAcccesionsList],
  exports: [
    AutomaticDebitComponent, DebitServicesList, CancelAutomaticDebitComponent, DebitAcccesionsList
  ]
})
export class DebitModule {}
