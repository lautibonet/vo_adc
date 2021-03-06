import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard }   from './dashboard';

const routes: Routes = [
  { path: 'dashboard',  component: Dashboard }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
