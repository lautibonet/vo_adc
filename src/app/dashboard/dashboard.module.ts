import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServiceCard } from './service/service-card';
import { ReceiptsDashboardList } from './service/receipts-dashboard-list';
import { AccessionsButtons } from './service/accessions-buttons';
import { GraphsComponent } from './service/graph/graphs-component';
import { GraphDirective } from './service/graph/graph-directive';
import { PeriodComponent } from './service/period/period-detail';
import { Dashboard } from './dashboard';
import { NotificationAlert } from './notification-alert';
import { SummaryCard } from './summary-card';
import { SummaryList } from './summary-list';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ServiceCard, ReceiptsDashboardList, AccessionsButtons,
    GraphsComponent, GraphDirective, PeriodComponent, Dashboard, NotificationAlert,
    SummaryCard, SummaryList],
  exports: [
    ServiceCard, ReceiptsDashboardList, AccessionsButtons,
    GraphsComponent, GraphDirective, PeriodComponent, Dashboard, NotificationAlert,
    SummaryCard, SummaryList
  ]
})
export class DashboardModule {}
