import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from '../service-mock';
import { Action } from '../model/action';

@Component({
  selector: 'automatic-debit',
  templateUrl: './automatic-debit-component.html'
})
export class AutomaticDebitComponent implements OnInit{
  title:string = "Adhesión a débito automático";
  actions:Array<Action> = [];
  model:any = {};
  services:Array<Service>;
  selectedDebitOption:any;
  selectedBankOption:any;
  selectedOnlineMethod:any;
  accountTypeOption:any;
  onlineMethodNumber:string;
  cbu:string;
  debitOptions:any[] = [
    {value: 'directDebit', display_name: 'Cuenta Bancaria'},
    {value: 'onlinePayment', display_name: 'Tarjeta de Crédito'}
  ];
  bankOptions:any[] = [
    {value: 'provincia', display_name: 'Banco Provincia'},
    {value: 'nacion', display_name: 'Banco Nacion'},
    {value: 'patagonia', display_name: 'Banco Patagonia'},
    {value: 'galicia', display_name: 'Banco Galcia'},
    {value: 'santander', display_name: 'Santander Rio'}
  ];
  onlineMethodOptions:any[] = [
    {value: 'mastercard', display_name: 'Mastercard'},
    {value: 'visa', display_name: 'Visa'},
    {value: 'naranja', display_name: 'Tarjeta Naranja'},
    {value: 'nativa', display_name: 'Nativa'}
  ];

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
}
