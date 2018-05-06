import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandDashboard }   from './demand-dashboard';
import { BlackoutForm } from  './blackout/blackout-form';
import { VoltageProblemsForm } from  './voltage-problem/voltage-problems-form';
import { LocalProblemForm } from './local-problem/local-problem-form';
import { PublicProblemForm } from './public-problem/public-problem-form';

const routes: Routes = [
  { path: 'demand', children: [
    { path: '', component: DemandDashboard },
    { path: 'blackout', component: BlackoutForm },
    { path: 'voltage', component: VoltageProblemsForm },
    { path: 'local', component: LocalProblemForm },
    { path: 'public', component: PublicProblemForm }
  ] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DemandRoutingModule {}
