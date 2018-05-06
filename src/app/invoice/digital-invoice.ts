import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from '../service-mock';
import { Action } from '../model/action';

@Component({
  selector: 'digital-invoice',
  templateUrl: './digital-invoice.html'
})
export class DigitalInvoiceComponent implements OnInit{
  title:string = "Suscripción factura digital";
  actions:Array<Action> = [];
  model:any = {};
  services:Array<Service>;

  constructor (
    private serviceService:ServiceService
  ) { }

  ngOnInit():void{
    setTimeout(() => {
         this.getServices();
     }, 0);
  }

  getServices(): void {
    this.serviceService.getServices().subscribe(services => {
      this.services = services;
      this.services.forEach(service => {
        service.selected = true;
      });
    });
  }

  noServiceSelected():boolean{
    return this.services && this.services.filter(s => s.selected && !s.digital_invoice).length == 0;
  }

}
