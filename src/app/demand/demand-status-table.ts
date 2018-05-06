import { Component, Input } from '@angular/core';
import { DemandStatus } from '../model/demand';

@Component({
  selector: 'demand-status-table',
  templateUrl: './demand-status-table.html',

})
export class DemandStatusTable{
  @Input() statusHistory:Array<DemandStatus>;
}
