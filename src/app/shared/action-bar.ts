import { Component, Input } from '@angular/core';
import { Action } from '../model/action';
import { Location } from '@angular/common';

@Component({
  selector: 'action-bar',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-ls-12 action-bar">
        <button md-button (click)="back()"><md-icon>arrow_back</md-icon></button>
        <h3 class="no-margin">{{title}}</h3>
        <button md-button [mdMenuTriggerFor]="acciones" class="action-menu">
          <span class="actions-label">ACCIONES</span> <md-icon class="align-vertical actions">list</md-icon>
        </button>
        <md-menu #acciones="mdMenu">
          <button md-menu-item *ngFor="let action of actions" [routerLink]="action.location_path" routerLinkActive="active">{{action.name}}</button>
        </md-menu>
      </div>
    </div>
  </div>
  `
})
export class ActionBar{
  @Input() title:string;
  @Input() actions:Array<Action>;

  constructor(private location: Location){}

  back(){
    this.location.back();
  }
}
