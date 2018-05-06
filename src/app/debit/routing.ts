import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomaticDebitComponent }   from '../debit/automatic-debit-component';
import { CancelAutomaticDebitComponent } from '../debit/cancel-automatic-debit';
import { CancellationProof } from '../debit/cancellation-proof';

const routes: Routes = [
  { path:"debit", children: [
    { path: '', component: AutomaticDebitComponent },
    { path: 'cancel', component: CancelAutomaticDebitComponent },
    { path: 'cancel/proof', component: CancellationProof },
  ] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DebitRoutingModule {}
