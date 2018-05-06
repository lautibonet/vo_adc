import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalInvoiceComponent }   from '../invoice/digital-invoice';
import { LoginComponent } from '../login/login';
import { SignupComponent } from '../login/signup';
import { SecurityQuestions } from '../login/security-questions';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'questions', component: SecurityQuestions }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
