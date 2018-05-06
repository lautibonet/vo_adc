import { Component, Input } from '@angular/core';
import { Period } from '../../../model/period';

@Component({
  selector: 'period-detail',
  templateUrl: './period-detail.html'
})
export class PeriodComponent{
  @Input() period:Period;

}
