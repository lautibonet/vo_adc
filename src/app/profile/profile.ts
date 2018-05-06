import { Component } from '@angular/core';
import { Action } from '../model/action';

@Component({
  selector: 'profile',
  templateUrl: './profile.html'
})
export class ProfileComponent{
  title:string = "Editar Perfil";
  actions:Array<Action> = [];

}
