import { Component, ViewChild } from '@angular/core';
import { ServiceAccession } from '../model/service_accession';
import { DebitAccessionService } from '../service-mock';
import { Action } from '../model/action';
import { Router } from '@angular/router';

@Component({
  selector: 'cancel-automatic-debit',
  templateUrl: './cancel-automatic-debit.html'
})
export class CancelAutomaticDebitComponent{
  title:string = "Baja de débito automático";
  actions:Array<Action> = [];
  serviceAccessions:Array<ServiceAccession>;
  model:any= {};

  motiveOptions:any[] = [
    { value: 1, display_name: "Cambio en los Términos y Condiciones"},
    { value: 2, display_name: "Débitos Incorrectos"},
    { value: 3, display_name: "Baja de Tarjeta de Crédito/ Cuenta Bancaria"},
    { value: 4, display_name: "Incremento en el Consumo"},
    { value: 5, display_name: "Otro"}
  ]

  constructor (
    private debitAccessionService:DebitAccessionService,
    private router:Router
  ) { }

  ngOnInit():void{
    setTimeout(() => {
         this.getAccessions();
     }, 0);
  }

  getAccessions(): void {
    this.debitAccessionService.getAccessions().subscribe(serviceAccessions => {
      this.serviceAccessions = serviceAccessions;
    });
  }

  noServiceSelected():boolean{
    return this.serviceAccessions && this.serviceAccessions.filter(s => s.selected).length == 0;
  }

  submit(){
    this.model.accessions = this.serviceAccessions.filter(s => s.selected);

    this.router.navigate(['/debit/cancel/proof']);
  }

}
