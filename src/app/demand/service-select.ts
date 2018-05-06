import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'service-select',
  templateUrl: './service-select.html'
})
export class ServiceSelect implements DoCheck{
  @Input() services:Array<Service>;
  @Input() model:any;
  @Output() modelChange = new EventEmitter();

  ngDoCheck(){
    this.modelChange.next(this.modelChange);
  }
}
