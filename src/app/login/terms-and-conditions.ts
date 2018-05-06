import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'terms-and-conditions',
  templateUrl: './terms-and-conditions.html',

})
export class TermsAndConditions {
  @Output() onBack = new EventEmitter();

  back(){
    this.onBack.emit();
  }

}
