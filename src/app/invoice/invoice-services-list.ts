import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'invoice-services-list',
  templateUrl: './invoice-services-list.html'
})
export class InvoiceServicesList implements DoCheck{
  @Input() services:Array<Service>;
  @Output() servicesChange = new EventEmitter();
  selectedAll:boolean = true;

  ngDoCheck() {
    this.servicesChange.next(this.servicesChange);
  }

  onCheckboxChange() {
    for (var i = 0; i < this.services.length; i++) {
      if(!this.services[i].digital_invoice){
        this.services[i].selected = this.selectedAll;
      }
    }
  }
  selectAll(){
    this.selectedAll = true;
    this.onCheckboxChange();
  }
  deselectAll(){
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
      if(!this.services[i].digital_invoice){
        allAttached = false;
        break;
      }
    }
    return allAttached;
  }
}
