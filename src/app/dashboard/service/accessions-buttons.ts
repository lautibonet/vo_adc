import { Component, Input } from '@angular/core';
import { Service } from '../../model/service';

@Component({
  selector: 'accessions-buttons',
  template:  `
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-center">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>Factura Digital</label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button *ngIf="service.digital_invoice" md-button class="bordered white">ADHERIDO</button>
            <button *ngIf="!service.digital_invoice" md-button routerLink="/invoice/setup" routerLinkActive="active" class="bordered grey">ADHERIR</button>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-center">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>Débito Automático</label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button *ngIf="service.automatic_debit" md-button class="bordered white">ADHERIDO</button>
            <button *ngIf="!service.automatic_debit" md-button routerLink="/debit/setup" routerLinkActive="active" class="bordered grey">ADHERIR</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AccessionsButtons{
  @Input() service:Service;

}
