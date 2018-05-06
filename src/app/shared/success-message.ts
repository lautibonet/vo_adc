import { Component } from '@angular/core';

@Component({
  selector: 'success-message',
  template: `
    <div class="container-fluid">
      <div class="row card-component">
        <md-card class="success-message-card">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
              <md-checkbox [disableRipple]="true" color="primary" checked="true" class="check_success" disabled></md-checkbox>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h3>{{message}}</h3>
            </div>
          </div>
        </md-card>
      </div>
    </div>
  `
})
export class SuccessMessage{
  message:string = "El proceso de adhesión al Débito Automático ha sido exitoso. Recibirá una notificación en su casilla de correo julieta@battistotti.com.ar confirmando la adhesión.";
}
