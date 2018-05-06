import { Component, Input } from '@angular/core';
import { Delegation } from '../model/delegation';

@Component({
  selector: 'delegations-list',
  templateUrl: './delegations-list.html'
})
export class DelegationsList {
  @Input() delegations:Array<Delegation>;
}
