import { Component, Input } from '@angular/core';
import { Consultation } from '../model/consultation';

@Component({
  selector: 'consultation-header-info',
  template: `
    <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2">
        <h3 class="no-margin"><b>N° {{consultation.id}}</b></h3>
      </div>
      <div class="col-xs-9 col-sm-9 col-md-4 col-lg-4">
        <h3 class="no-margin"><b>{{consultation.type}}</b></h3>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <h4 class="no-margin align-right hide-mobile">{{consultation.status}}</h4>
        <label class="hide-desktop">{{consultation.target}}</label>
      </div>
    </div>

    <div class="row hide-mobile">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label>{{consultation.target}}</label>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-right">
        <label>Actualizado {{consultation.updated}}</label>
      </div>
    </div>

    <div class="hide-desktop">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <label class="no-margin">Solicitud</label>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-right">
          <label class="no-margin">Actualizado</label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4 class="no-margin">{{consultation.status}}</h4>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-right">
          <label class="no-margin">{{consultation.updated}}</label>
        </div>
      </div>
    </div>
  `
})
export class ConsultationHeaderInfo {
  @Input() consultation:Consultation;
}
