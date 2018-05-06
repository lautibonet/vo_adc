import { Component, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { ServiceAccession } from '../model/service_accession';

@Component({
  selector: 'debit-accessions-list',
  templateUrl: './debit-accessions-list.html'
})
export class DebitAcccesionsList implements DoCheck{
  @Input() serviceAccessions:Array<ServiceAccession>;
  @Output() serviceAccessionsChange = new EventEmitter();
  selectedAll:boolean = false;

  ngDoCheck() {
    this.serviceAccessionsChange.next(this.serviceAccessionsChange);
  }

  selectAll() {
    for (var i = 0; i < this.serviceAccessions.length; i++) {
      if(this.serviceAccessions[i].automatic_debit){
        this.serviceAccessions[i].selected = this.selectedAll;
      }
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.serviceAccessions.filter(s => s.automatic_debit).every(function(item:any) {
        return item.selected == true;
      })
  }
  noneAttached():boolean{
    var noneAttached:boolean = true;

    for (var i = 0; i < this.serviceAccessions.length; i++) {
      if(this.serviceAccessions[i].automatic_debit){
        noneAttached = false;
        break;
      }
    }
    return noneAttached;
  }
}
