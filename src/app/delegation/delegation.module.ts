import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DelegateStepOne } from '../delegation/delegate-step-one';
import { DelegateStepTwo } from '../delegation/delegate-step-two';
import { CancellationProof } from '../debit/cancellation-proof';
import { ServicesList } from '../delegation/services-list';
import { ThirdpartyServices } from '../delegation/thirdparty-services';
import { ThirdpartyServiceCard } from '../delegation/thirdparty-service-card';
import { ThirdpartyServicesList } from '../delegation/thirdparty-services-list';
import { DelegatedServices } from '../delegation/delegated-services';
import { DelegatedServiceCard } from '../delegation/delegated-service-card';
import { DelegationsList } from '../delegation/delegations-list';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DelegateStepOne, DelegateStepTwo, CancellationProof, ServicesList,
    ThirdpartyServices, ThirdpartyServiceCard, ThirdpartyServicesList,
    DelegatedServices, DelegatedServiceCard, DelegationsList
  ],
  exports: [
    DelegateStepOne, DelegateStepTwo, CancellationProof, ServicesList,
    ThirdpartyServices, ThirdpartyServiceCard, ThirdpartyServicesList,
    DelegatedServices, DelegatedServiceCard, DelegationsList
  ]
})
export class DelegationModule {}
