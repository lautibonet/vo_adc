import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelegateStepOne } from '../delegation/delegate-step-one';
import { DelegateStepTwo } from '../delegation/delegate-step-two';
import { ThirdpartyServices } from '../delegation/thirdparty-services';
import { DelegatedServices } from '../delegation/delegated-services';

const routes: Routes = [
  { path: 'delegate', children: [
    { path: '', component: DelegateStepOne },
    { path: 'select', component: DelegateStepTwo },
    { path: ':identifier', component: DelegateStepOne }
  ] },
  { path: 'thirdparty', component: ThirdpartyServices },
  { path: 'delegated', component: DelegatedServices },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DelegationRoutingModule {}
