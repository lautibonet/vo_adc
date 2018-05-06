import { Component } from '@angular/core';
import { Globals } from '../extensions/globals';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesService } from '../service-mock';
import { RootService } from '../rootservice';

@Component({
  selector: 'signup',
  templateUrl: './signup.html',

})
export class SignupComponent {
  step:string = 'one';
  showTermsAndConditions:boolean = false;
  model:any = {};
  passwordPattern: RegExp;
  emailPattern: RegExp;
  passwordType:string = "password";
  confirmedPasswordType:string = "password";
  showPassword = false;
  showConfirmedPassword = false;
  countries:string[];
  documentTypeOptions:any[] = [
    { id: 1, display_name: "DNI" },
    { id: 2, display_name: "CUIT" }
  ];
  sexOptions:any[] = [
    { id: "M", display_name: "Masculino" },
    { id: "F", display_name: "Femenino" }
  ];

  constructor(
    private rootService:RootService,
    private globals:Globals,
    private router:Router,
    private countriesService:CountriesService
  ){
    rootService.setInLoginPage(false);
    this.passwordPattern = globals.PASSWORD_REGEX;
    this.emailPattern = globals.EMAIL_REGEX;
    this.getCountries();
  }

  getCountries(): void {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = [];
      countries.forEach(c => {
        if(c.translations["es"] !== undefined)
          this.countries.push(c.translations["es"]);
      });
    });
  }

  continueSignup(){
    this.step = 'two';
  }

  submitSignup(){
    this.router.navigate(['/questions']);
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

  toggleShowConfirmedPassword(){
    this.showConfirmedPassword = !this.showConfirmedPassword;
    if (this.showConfirmedPassword){
        this.confirmedPasswordType = "text";
    }
    else {
        this.confirmedPasswordType = "password";
    }
  }

  clickTermsAndConditions(){
    this.showTermsAndConditions = !this.showTermsAndConditions;
  }

}
