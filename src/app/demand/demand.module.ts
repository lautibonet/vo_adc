import { NgModule }             from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DemandDashboard } from '../demand/demand-dashboard';
import { DemandCard } from '../demand/demand-card';
import { DemandHeaderInfo } from '../demand/demand-header-info';
import { DemandStatusTable } from '../demand/demand-status-table';
import { BlackoutForm } from './blackout/blackout-form';
import { ServiceSelect } from '../demand/service-select';
import { InternalProblemCard } from '../demand/internal-problem';
import { BlackoutQuestions } from './blackout/blackout-questions';
import { InstalationProblemSelect } from '../demand/instalation-problem-select';
import { CommentaryCard } from '../demand/commentary-card';
import { VoltageProblemsForm } from  './voltage-problem/voltage-problems-form';
import { VoltageProblemsQuestions } from  './voltage-problem/voltage-problems-questions';
import { SelectProblemLocation } from './public-problem/select-problem-location';
import { LocalProblemForm } from './local-problem/local-problem-form';
import { PublicProblemForm } from './public-problem/public-problem-form';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [DemandDashboard, DemandCard, BlackoutForm,
  ServiceSelect, InternalProblemCard, BlackoutQuestions, InstalationProblemSelect, CommentaryCard,
  VoltageProblemsForm, VoltageProblemsQuestions, SelectProblemLocation, LocalProblemForm,
  PublicProblemForm, DemandHeaderInfo, DemandStatusTable],
  exports: [
    DemandDashboard, DemandCard, BlackoutForm,
    ServiceSelect, InternalProblemCard, BlackoutQuestions, InstalationProblemSelect, CommentaryCard,
    VoltageProblemsForm, VoltageProblemsQuestions, SelectProblemLocation, LocalProblemForm,
    PublicProblemForm, DemandHeaderInfo, DemandStatusTable
  ]
})
export class DemandModule {}
