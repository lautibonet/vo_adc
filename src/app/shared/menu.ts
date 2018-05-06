import { Component, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from '../model/menu_item';
import { MenuService } from '../service-mock';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'menu',
  template: `
  <nav>
    <ul>
      <li *ngFor="let menuItem of menuItems">
        <menu-item-template [menuItem]="menuItem" (onClick)="clickEvent()"></menu-item-template>
      </li>
    </ul>
  </nav>
  `
})
export class Menu {
  @Output() onClick = new EventEmitter();
  menuItems:MenuItem[];

  constructor(private menuService:MenuService){
    this.menuItems = menuService.menuItems;
  }

  clickEvent(){
    this.onClick.next();
  }
}


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
  selector: 'menu-item-template',
  template: `
  <ng-template [ngIf]="menuItem && !menuItem.subitems">
    <a [routerLink]="menuItem.url" routerLinkActive="active" (click)="clickEvent()">
      <md-icon>{{menuItem.icon}}</md-icon> {{menuItem.key}}
    </a>
  </ng-template>

  <ng-template [ngIf]="menuItem && menuItem.subitems">
    <a (click)="expandCollapse()">
      <md-icon>{{menuItem.icon}}</md-icon>
      <span>{{menuItem.key}}</span>
      <span class="expand-arrow">
        <md-icon *ngIf="collapsed == 'close'">expand_more</md-icon>
        <md-icon *ngIf="collapsed == 'open'">expand_less</md-icon>
      </span>
    </a>

    <ul [@expandCollapse]="collapsed">
      <li *ngFor="let subitem of menuItem.subitems" class="subitem">
        <a [routerLink]="subitem.url" routerLinkActive="active" (click)="clickEvent()">
          <md-icon>{{subitem.icon}}</md-icon> {{subitem.key}}
        </a>
      </li>
    </ul>
  </ng-template>
  `
})
export class MenuItemTemplate{
  @Output() onClick = new EventEmitter();
  @Input() menuItem:MenuItem;
  collapsed: string = 'close';

  constructor(private angulartics2: Angulartics2) {  }

  clickEvent(){
    this.angulartics2.eventTrack.next({
      action: this.menuItem.key,
      properties: { category: 1 },
    });

    this.onClick.next();
  }

  expandCollapse(){
    this.collapsed = (this.collapsed == 'close') ? 'open' : 'close';
  }
}
