import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SocialRateComponent } from  '../social_rate/social_rate';
import { SocialRateForm } from '../social_rate/social_rate_form';
import { SocialRateInfo } from '../social_rate/social_rate_info';
import { SocialRateResultTable } from '../social_rate/result_table';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SocialRateComponent, SocialRateResultTable,
  SocialRateForm, SocialRateInfo],
  exports: [
    SocialRateComponent, SocialRateResultTable,
    SocialRateForm, SocialRateInfo
  ]
})
export class SocialRateModule {}
