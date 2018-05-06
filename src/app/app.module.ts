import { NgModule } from '@angular/core';
import { BillingModule } from './billing/billing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DelegationModule } from './delegation/delegation.module';
import { DebitModule } from './debit/debit.module';
import { CouponModule } from './coupon/coupon.module'
import { SocialRateModule } from './social_rate/social-rate.module';
import { LoginModule } from './login/login.module';
import { DemandModule } from './demand/demand.module';
import { DigitalInvoiceModule } from './invoice/invoice.module';
import { PaymentModule } from './payment/payment.module';
import { ProfileModule } from './profile/profile.module';
import { ConsultationModule } from './consultation/consultation.module';
import { SharedModule } from './shared/shared.module';
import { AsyncPipe } from '@angular/common';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
  MdCheckboxModule, MdTabsModule, MdSidenavModule, MdButtonToggleModule,
  MdButtonToggleGroupMultiple, MdProgressSpinnerModule,
  MD_PLACEHOLDER_GLOBAL_OPTIONS, MD_RIPPLE_GLOBAL_OPTIONS } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppComponent } from './main/main-component';
import { ServiceService, ReceiptService, GraphService, OnlinePaymentMethodService, DebitAccessionService, ConsultationService,
  CountriesService, DelegationService, UserService, SummaryService, MenuService, DemandService, GMapsService, PeriodService } from './service-mock';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RootService } from './rootservice';
import { CustomDateAdapter } from './extensions/custom-date-adapter';
import { DateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { Globals } from './extensions/globals';
import 'hammerjs';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, BillingModule, DashboardModule, DelegationModule, DebitModule, DemandModule, CouponModule,
    SocialRateModule, PaymentModule, ProfileModule, DigitalInvoiceModule, LoginModule, ConsultationModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [ServiceService, ReceiptService, GraphService, OnlinePaymentMethodService, ConsultationService,
    DebitAccessionService, RootService, Globals, CountriesService, DelegationService, UserService,
    SummaryService, MenuService, DemandService, GMapsService, PeriodService,
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MD_DATE_FORMATS, useValue: APP_DATE_FORMATS},
    {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' }},
    {provide: MD_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}},
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
