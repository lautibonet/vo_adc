import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationDashboard }   from './consultation-dashboard';

const routes: Routes = [
  { path: 'consultation',  component: ConsultationDashboard }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ConsultationRoutingModule {}
