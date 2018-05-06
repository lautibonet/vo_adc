import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserSummary } from '../model/user-summary';

@Component({
  animations: [
    trigger('expandCollapse', [
         state('open', style({
             'opacity': '1',
             'display': 'visible'
         })),
         state('close', style({
             'opacity': '0',
             'display': 'none'
         })),
         transition('open <=> close', animate('200ms ease-out'))
     ])
  ],
  selector: 'summary-list',
  templateUrl: './summary-list.html'
})
export class SummaryList implements OnInit{
  @Input() userSummaries:Array<UserSummary>;
  @Input() tableShown:string;
  @Output() ownerIdFilter = new EventEmitter();
  selectedUser:UserSummary = new UserSummary();
  allOwnersSummary:UserSummary = new UserSummary();

  ngOnInit():void{

    this.allOwnersSummary.owner_id = -1;
    this.allOwnersSummary.owner_name = "Todos los titulares";
    this.allOwnersSummary.services_count = this.userSummaries.map(c => c.services_count).reduce((sum, current) => sum + current);
    this.allOwnersSummary.receipts_count = this.userSummaries.map(c => c.receipts_count).reduce((sum, current) => sum + current);
    this.allOwnersSummary.overdue_receipts_count = this.userSummaries.map(c => c.overdue_receipts_count).reduce((sum, current) => sum + current);
    this.allOwnersSummary.total_debt = this.userSummaries.map(c => c.total_debt).reduce((sum, current) => sum + current);

    this.selectedUser = this.allOwnersSummary;
  }

  onSelectChange(){
    this.ownerIdFilter.next(this.selectedUser.owner_id);
  }

}
