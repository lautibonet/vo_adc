import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialRateComponent } from '../social_rate/social_rate';

const routes: Routes = [
    { path: 'socialrate', component: SocialRateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class SocialRateRoutingModule {}
