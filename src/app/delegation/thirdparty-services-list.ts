import { Component, Input } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'thirdparty-services-list',
  templateUrl: './thirdparty-services-list.html'
})
export class ThirdpartyServicesList {
  @Input() services:Array<Service>;
}
