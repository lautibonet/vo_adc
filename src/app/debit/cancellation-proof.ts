import { Component, ViewChild } from '@angular/core';
import { ServiceAccession } from '../model/service_accession';
import { DebitAccessionService } from '../service-mock';
import { Action } from '../model/action';

@Component({
  selector: 'cancellation-proof',
  templateUrl: './cancellation-proof.html'
})
export class CancellationProof{
  title:string = "Baja a débito automático";
  actions:Array<Action> = [];
  cancelledAccessions:Array<ServiceAccession>;

  constructor (
    private debitAccessionService:DebitAccessionService
  ) { }

  ngOnInit():void{
    setTimeout(() => {
         this.getAccessions();
     }, 0);
  }

  getAccessions(): void {
    this.debitAccessionService.getAccessions().subscribe(cancelledAccessions => {
      this.cancelledAccessions = cancelledAccessions.filter(c => c.automatic_debit == true);
    });
  }

}
