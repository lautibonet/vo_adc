import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDatepickerModule, MdNativeDateModule, MatSidenavModule, MatMenuModule, MatCheckboxModule,
  MatCardModule, MatIconModule, MatChipsModule, MatTooltipModule, MatSelectModule, MatButtonModule,
  MatRadioModule, MatAutocompleteModule, MatProgressBarModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MainRoutingModule } from '../main/routing';
import { PaymentCouponRoutingModule } from '../coupon/routing';
import { DashboardRoutingModule } from '../dashboard/routing';
import { DebitRoutingModule } from '../debit/routing';
import { DelegationRoutingModule } from '../delegation/routing';
import { invoiceRoutingModule } from '../invoice/routing';
import { LoginRoutingModule } from '../login/routing';
import { PaymentSelectRoutingModule } from '../payment/routing';
import { ProfileRoutingModule } from '../profile/routing';
import { SocialRateRoutingModule } from '../social_rate/routing';
import { DemandRoutingModule } from '../demand/routing';
import { BillingRoutingModule } from '../billing/routing';
import { ConsultationRoutingModule } from '../consultation/routing';
import { UtilsModule } from './utils/utils.module';
import { AgmCoreModule } from '@agm/core';
import { LoadingServicesMessage } from './loading-services-message';
import { SuccessMessage } from './success-message';
import { ServiceHeader } from './service-header';
import { PageFooter } from './page-footer';
import { ActionBar } from './action-bar';
import { GoolgeMap } from './utils/google-map';
import { Menu, MenuItemTemplate } from './menu';

export function createTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http);
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule, HttpModule, BrowserModule, MatSidenavModule, TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: (createTranslateLoader),
               deps: [HttpClient]
           }
       }),
    MatChipsModule, MatTooltipModule, MatSelectModule, MatButtonModule, MatRadioModule, MatAutocompleteModule, HttpClientModule,
    ChartsModule, MainRoutingModule, BillingRoutingModule, PaymentCouponRoutingModule, MatMenuModule, ConsultationRoutingModule,
    MatCardModule, MatIconModule, MatProgressBarModule, MatInputModule, BrowserAnimationsModule, MatProgressSpinnerModule,
    DashboardRoutingModule, DebitRoutingModule, DelegationRoutingModule, invoiceRoutingModule,
    LoginRoutingModule, PaymentSelectRoutingModule, ProfileRoutingModule, SocialRateRoutingModule,
    DemandRoutingModule, MdNativeDateModule, MatDatepickerModule, UtilsModule, MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdlb5QYlK76D6dwkb1cRgztQvdsiYnsbc'
    })
  ],
  declarations: [LoadingServicesMessage, ActionBar, GoolgeMap, SuccessMessage, ServiceHeader, PageFooter, Menu, MenuItemTemplate],
  exports: [
    FormsModule, ReactiveFormsModule, HttpModule, BrowserModule, MatSidenavModule, TranslateModule, HttpClientModule,
    MatChipsModule, MatTooltipModule, MatSelectModule, MatButtonModule, MatRadioModule, MatAutocompleteModule,
    MatCardModule, MatIconModule, MatProgressBarModule, MatInputModule, BrowserAnimationsModule, MatProgressSpinnerModule,
    ChartsModule, MainRoutingModule, BillingRoutingModule, PaymentCouponRoutingModule, MatMenuModule, ConsultationRoutingModule,
    DashboardRoutingModule, DebitRoutingModule, DelegationRoutingModule, invoiceRoutingModule,
    LoginRoutingModule, PaymentSelectRoutingModule, ProfileRoutingModule, SocialRateRoutingModule,
    DemandRoutingModule, MdNativeDateModule, MatDatepickerModule, AgmCoreModule, UtilsModule,
    LoadingServicesMessage, ActionBar, GoolgeMap, SuccessMessage, ServiceHeader, PageFooter, Menu, MatCheckboxModule
  ]
})
export class SharedModule {}
