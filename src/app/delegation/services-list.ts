import { Component, Input, DoCheck, EventEmitter, Output, OnInit } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'services-list',
  templateUrl: './services-list.html'
})
export class ServicesList implements DoCheck, OnInit{
  @Input() allDisabled:boolean = false;
  @Input() services:Array<Service>;
  @Output() servicesChange = new EventEmitter();
  selectedAll:boolean = false;

  ngOnInit():void{
    if(this.allDisabled){
      this.services.forEach(s => s.selected = true);
      this.selectedAll = true;
    }
  }

  ngDoCheck() {
    this.servicesChange.next(this.servicesChange);
  }

  onCheckboxChange() {
    for (var i = 0; i < this.services.length; i++) {
      this.services[i].selected = this.selectedAll;
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

}
