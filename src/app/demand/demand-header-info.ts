import { Component, Input } from '@angular/core';
import { Demand } from '../model/demand';

@Component({
  selector: 'demand-header-info',
  template: `
    <div class="row">
      <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2">
        <h3 class="no-margin"><b>N° {{demand.id}}</b></h3>
      </div>
      <div class="col-xs-8 col-sm-9 col-md-4 col-lg-4">
        <h3 class="no-margin"><b>{{demand.type}}</b></h3>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <h4 class="no-margin align-right hide-mobile">{{demand.status}}</h4>
        <label class="hide-desktop">{{demand.target}}</label>
      </div>
    </div>

    <div class="row hide-mobile">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label>{{demand.target}}</label>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-right">
        <label>Actualizado {{demand.updated}}<span class="primary" style="margin-left: 4px;">Reiterado(2)</span></label>
      </div>
    </div>

    <div class="hide-desktop">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <label class="no-margin">Solicitud</label>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-right">
          <label class="no-margin">Actualizado <span class="primary" style="margin-left: 4px;">Reiterado(2)</span></label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4 class="no-margin">{{demand.status}}</h4>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 align-right">
          <label class="no-margin">{{demand.updated}}</label>
        </div>
      </div>
    </div>
  `
})
export class DemandHeaderInfo {
  @Input() demand:Demand;
}
