import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConsultationDashboard } from './consultation-dashboard';
import { ConsultationCard } from './consultation-card';
import { ConsultationHeaderInfo } from './consultation-header-info';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    SharedModule, BrowserAnimationsModule
  ],
  declarations: [ConsultationDashboard, ConsultationCard, ConsultationHeaderInfo],
  exports: [
    ConsultationDashboard, ConsultationCard, ConsultationHeaderInfo
  ]
})
export class ConsultationModule {}
