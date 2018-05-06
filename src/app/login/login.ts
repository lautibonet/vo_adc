import { Component, OnInit } from '@angular/core';
import { RootService } from '../rootservice';
import { UserService } from '../service-mock';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'login',
  templateUrl: './login.html',

})
export class LoginComponent {
  passwordType:string = "password";
  showPassword = false;
  model:any = {};
  documentTypeOptions:any[] = [
    { id: 1, display_name: "DNI" },
    { id: 2, display_name: "CUIT" }
  ];

  constructor(
    private rootService:RootService,
    private router:Router,
    private userService:UserService
  ){
    rootService.setInLoginPage(true);
  }

  submitLogin(){
    this.userService.getUsers().subscribe((users) => {

      for (let user of users){
        if(user.documentNumber == this.model.documentNumber){
          this.rootService.setLoggedUser(user);
          this.router.navigate(['/dashboard']);
        }
      }
    });
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

}
