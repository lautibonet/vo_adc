import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'contact-info',
  templateUrl: './contact-info.html'
})
export class ContactInfoComponent implements OnInit{
  @ViewChild('contactInfoForm') form:any;
  model:any = {
    newPhone: {}
  };
  emailPattern:RegExp;
  showPassword = false;
  collapsed: string = 'close';
  passwordType:string = "password";
  mediaArray:any[] = [
    {
      value: "1169218858",
      type: 1,
      owner: "Propio",
      provider: "Movistar",
      primary:true,
      new:false,
      removed:false
    },
    {
      value: "1143859922",
      type: 1,
      owner: "Vecino",
      provider: "Claro",
      new:false,
      removed:false
    }
  ];
  emailArray:any[] = [{
    value:"lautibonet@gmail.com",
    new:false,
    removed:false
  },
  {
    value:"lautaro.bonet@artdecode.com.ar",
    new:false,
    removed:false
  }];
  ownerList:string[] = ["Propio", "Trabajo", "Vecino"];
  provderList:string[] = ["Movistar", "Claro", "Personal"];

  constructor(
    private globals:Globals
  ){
    this.emailPattern = globals.EMAIL_REGEX;
  }

  ngOnInit():void{
    this.model.mainphone = this.mediaArray.find(m => m.primary).value;
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
  	this.collapsed = (this.collapsed == 'open') ? 'close' : 'open';
  }

  addPhone(){
    var exists: boolean = this.mediaArray.find(m => m.value == this.model.newPhone.value) != null;

    if(exists) return;

    var phone = {
      value: this.model.newPhone.value,
      type: 1,
      owner: this.model.newPhone.selectedOwner,
      provider: this.model.newPhone.selectedProvider,
      new:true
    }
    this.mediaArray.push(phone);
    this.form.reset();
  }

  addEmail(){
    var exists: boolean = this.emailArray.find(e => e.value == this.model.newEmail) != null;

    if(exists) return;

    var email = {
      value:this.model.newEmail,
      new:true
    }
    this.emailArray.push(email);
    this.form.reset();
  }

  removePhone(phone){
    var index = this.mediaArray.indexOf(phone, 0);
    if(!phone.new){
      var removePhone = {
        value:phone.value,
        owner:phone.owner,
        type:phone.type,
        provider:phone.provider,
        new:true,
        removed:true
      }
      this.mediaArray[index] = removePhone;
    }else{
      if(phone.new && phone.removed){
        var removePhone = {
          value:phone.value,
          owner:phone.owner,
          type:phone.type,
          provider:phone.provider,
          new:false,
          removed:false
        }
        this.mediaArray[index] = removePhone;
      }else{
        this.mediaArray.splice(index, 1);
      }
    }
  }

  removeEmail(email){
    var index = this.emailArray.indexOf(email, 0);
    if(!email.new){
      var removeEmail = {
        value:email.value,
        new:true,
        removed:true
      }
      this.emailArray[index] = removeEmail;
    }else{
      if(email.new && email.removed){
        var removeEmail = {
          value:email.value,
          new:false,
          removed:false
        }
        this.emailArray[index] = removeEmail;
      }else{
        this.emailArray.splice(index, 1);
      }
    }

  }

}
