import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'commentary',
  template: `
  <div class="row card-component">
      <article class="col-xs-12 col-sm-12 col-md-12 col-ls-12">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-ls-12">
            <md-card>

              <h3>Información Adicional</h3>
              <label>Ingrese, en el caso de ser necesario, informacion adicional que pueda ayudarnos a resolver el problema.</label>

              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-ls-12">
                  <md-input-container>
                    <input mdInput [(ngModel)]="model.commentary" name="commentary" placeholder="Comentario" />
                  </md-input-container>
                </div>
              </div>

              <footer>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-ls-12 align-right">
                    <button md-raised-button class="primary-button">FINALIZAR</button>
                  </div>
                </div>
              </footer>

            </md-card>
          </div>
        </div>
      </article>
    </div>
  `
})
export class CommentaryCard implements DoCheck{
  @Input() model:any;
  @Output() modelChange = new EventEmitter();

  ngDoCheck(){
    this.modelChange.next(this.modelChange);
  }
}
