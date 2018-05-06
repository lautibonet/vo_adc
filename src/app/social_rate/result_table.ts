import { Component, Input } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'result-table',
  template: `
  <!-- TABLA DE SERVICIOS DESKTOP -->
  <table class="table services-table-desktop">
    <thead>
      <tr>
        <th>Suminsitro</th>
        <th>Dirección</th>
        <th class="align-center">Aplica TIS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{serviceResult.identifier}}</td>
        <td>{{serviceResult.address}}</td>
        <td class="align-center">SI</td>
      </tr>
    </tbody>
  </table>
  <!-- FIN TABLA DE SERVICIOS DESKTOP -->
  <!-- TABLA DE SERVICIOS DELEGADOS MOBILE -->
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 services-table-mobile">
    <div class="row">
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>Suminsitro</label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label class="row-data">{{serviceResult.identifier}}</label>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 align-right">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>Aplica TIS</label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label class="row-data">SI</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label>Dirección</label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <label class="header-data">{{serviceResult.address}}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FIN TABLA DE SERVICIOS DELGEADOS MOBILE -->
  `
})
export class SocialRateResultTable {
  @Input() serviceResult:Service;
}
