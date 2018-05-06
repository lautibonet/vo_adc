import { Component } from '@angular/core';
import { Action } from '../model/action';

@Component({
  selector: 'social-rate',
  templateUrl: './social_rate.html',

})
export class SocialRateComponent {
  title:string = "Consultar Tarifa Social";
  actions:Array<Action> = [];
}
