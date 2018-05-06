import { Component } from '@angular/core';

@Component({
  selector: 'internal-problem',
  template: `
  <div class="row">
    <article class="col-xs-12 col-sm-12 col-md-12 col-ls-12 card-component">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-ls-12">
          <md-card>

            <p> <md-icon class="error">warning</md-icon>
            El problema se encuentra en la instalación interna de su inmueble.
            Por favor consulte con un electricista.</p>

          </md-card>
        </div>
      </div>
    </article>
  </div>
  `
})
export class InternalProblemCard {

}
