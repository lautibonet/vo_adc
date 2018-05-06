import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { SecurityQuestions } from './security-questions';
import { TermsAndConditions } from './terms-and-conditions';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent, SignupComponent, SecurityQuestions, TermsAndConditions
  ],
  exports: [
    LoginComponent, SignupComponent, SecurityQuestions, TermsAndConditions
  ]
})
export class LoginModule {}
