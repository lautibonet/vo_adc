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
  selector: 'edit-profile',
  templateUrl: './edit-profile.html'
})
export class EditProfileComponent{
  model:any = {};
  showPassword = false;
  passwordType:string = "password";
  collapsed: string = 'close';
  emailPattern: RegExp;
  documentTypeOptions:any[] = [
    { id: 1, display_name: "DNI" },
    { id: 2, display_name: "CUIT" }
  ];
  sexOptions:any[] = [
    { id: "M", display_name: "Masculino" },
    { id: "F", display_name: "Femenino" }
  ];

  constructor(private globals:Globals){
    this.emailPattern = globals.EMAIL_REGEX;
  }

  toggleShow()
  {
      this.showPassword = !this.showPassword;
      if (this.showPassword){
          this.passwordType = "text";
      }
      else {
          this.passwordType = "password";
      }
  }

  showOrHide() {
  	this.collapsed = (this.collapsed == 'close') ? 'open' : 'close';
  }

}
