import { Component, Input } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'service-header',
  templateUrl: './service-header.html'
})
export class ServiceHeader{
  @Input() service:Service;
  @Input() showStatus:boolean = true;

}
