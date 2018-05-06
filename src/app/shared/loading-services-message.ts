import { Component } from '@angular/core';

@Component({
  selector: 'loading-services-message',
  template: `
    <div class="loading-services">
      <h4>Cargando Servicios</h4>
      <md-progress-bar mode="indeterminate"></md-progress-bar>
    </div>
  `
})
export class LoadingServicesMessage{}
