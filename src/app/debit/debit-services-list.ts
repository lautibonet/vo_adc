import { Component, Input } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'debit-services-list',
  templateUrl: './debit-services-list.html'
})
export class DebitServicesList{
  @Input() services:Array<Service>;
  selectedAll:boolean = true;

  onCheckboxChange(){
    for (var i = 0; i < this.services.length; i++) {
      if(!this.services[i].automatic_debit){
        this.services[i].selected = this.selectedAll;
      }
    }
  }
  selectAll() {
    this.selectedAll = true;
    this.onCheckboxChange();
  }
  deselectAll() {
    this.selectedAll = false;
    this.onCheckboxChange();
  }
  checkIfAllSelected() {
    this.selectedAll = this.services.every(function(item:any) {
        return item.selected == true;
      })
  }
  areAllAttached():boolean{
    var allAttached:boolean = true;

    for (var i = 0; i < this.services.length; i++) {
      if(!this.services[i].automatic_debit){
        allAttached = false;
        break;
      }
    }
    return allAttached;
  }
}
