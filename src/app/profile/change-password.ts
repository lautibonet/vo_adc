import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Globals } from '../extensions/globals';

@Component({
  animations: [
    trigger('expandCollapse', [
         state('open', style({
             'height': '*'
         })),
         state('close', style({
             'height': '0px',
             'overflow': 'hidden'
         })),
         transition('open <=> close', animate('200ms ease-out'))
     ])
  ],
  selector: 'change-password',
  templateUrl: './change-password.html'
})
export class ChangePasswordComponent{
  collapsed: string = 'close';
  model:any = {};
  passwordPattern: RegExp;
  showNewPassword = false;
  showConfirmedPassword = false;
  showPassword = false;
  newPasswordType:string = "password";
  confirmedPasswordType:string = "password";
  passwordType:string = "password";

  constructor(private globals:Globals){
    this.passwordPattern = globals.PASSWORD_REGEX;
  }

  passwordsMatch():boolean{
    return this.model.password == this.model.confirmedPassword;
  }

  toggleShowPassword()
  {
      this.showPassword = !this.showPassword;
      if (this.showPassword){
          this.passwordType = "text";
      }
      else {
          this.passwordType = "password";
      }
  }

  toggleShowNewPassword()
  {
      this.showNewPassword = !this.showNewPassword;
      if (this.showNewPassword){
          this.newPasswordType = "text";
      }
      else {
          this.newPasswordType = "password";
      }
  }

  toggleShowConfirmedPassword()
  {
      this.showConfirmedPassword = !this.showConfirmedPassword;
      if (this.showConfirmedPassword){
          this.confirmedPasswordType = "text";
      }
      else {
          this.confirmedPasswordType = "password";
      }
  }

  showOrHide() {
  	this.collapsed = (this.collapsed == 'close') ? 'open' : 'close';
  }

}
