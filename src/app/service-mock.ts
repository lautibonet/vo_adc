import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, NgZone  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Service } from './model/service';
import { Receipt } from './model/receipt';
import { Graph } from './model/graph';
import { Period } from './model/period';
import { User } from './model/user';
import { UserSummary } from './model/user-summary';
import { Delegation } from './model/delegation';
import { MenuItem } from './model/menu_item';
import { Demand } from './model/demand';
import { Consultation } from './model/consultation';
import { OnlinePaymentMethod } from './model/online_payment_method';
import { ServiceAccession } from './model/service_accession';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';

'use strict';

@Injectable()
export class ServiceService {

  constructor(private http: Http) {}

  public getServices(): Observable<Array<Service>> {
   return this.http.get("assets/service_mock.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class ReceiptService {

  constructor(private http: Http) {}

  public getReceipts(): Observable<Array<Receipt>> {

   return this.http.get("assets/receipts.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class PeriodService {

  constructor(private http: Http) {}

  public getPeriods(): Observable<Array<Period>> {

   return this.http.get("assets/periods.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class GraphService {
  constructor(private http: Http) {}

  public getGraphs(): Observable<Array<Graph>> {
   return this.http.get("assets/graphs.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class OnlinePaymentMethodService {
  constructor(private http: Http) {}

  public getOnlinePaymentMethods(): Observable<Array<OnlinePaymentMethod>> {
   return this.http.get("assets/online_payment_methods.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class DebitAccessionService {
  constructor(private http: Http) {}

  public getAccessions(): Observable<Array<ServiceAccession>> {
   return this.http.get("assets/accessions.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class DemandService {
  constructor(private http: Http) {}

  public getDemands(): Observable<Array<Demand>> {
   return this.http.get("assets/reclamos.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class ConsultationService {
  constructor(private http: Http) {}

  public getConsultations(): Observable<Array<Consultation>> {
   return this.http.get("assets/consultations.json")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class CountriesService {
  constructor(private http: Http) {}

  public getCountries(): Observable<Array<any>> {
   return this.http.get("https://restcountries.eu/rest/v2/all?fields=translations")
         .map((res:any) => res.json());
       }
}

@Injectable()
export class DelegationService {
  constructor(private http: Http) {}
  // Observable Item source
  private _delegate = new BehaviorSubject<any>({});

  // Observable Item stream
  delegate$ = this._delegate.asObservable();

  getDelegations(): Observable<Array<Delegation>>{
    return this.http.get("assets/delegations.json")
      .map((res:any) => res.json());
  }

  // service command
  setDelegate(value:any) {
    this._delegate.next(value);
  }
}

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  public getUsers(): Observable<Array<User>> {
   return this.http.get("assets/users.json")
    .map((res:any) => res.json());
  }
}

@Injectable()
export class SummaryService {
  constructor(private http: Http) {}

  public getSummary(): Observable<Array<UserSummary>> {
   return this.http.get("assets/summary.json")
    .map((res:any) => res.json());
  }
}

@Injectable()
export class MenuService {

  private _menuItems:  MenuItem[] = [
      { key: 'Resumen de Consumos', icon:"timeline", url: "/dashboard" },
      // { key: 'Facturación', icon:"description", url: "/billing" },
      { key: 'Facturación y Pagos', icon:"attach_money", subitems: [
        { key: 'Últimas Facturas', icon:"description", url: "/billing" },
        { key: 'Débito Automático', icon:"credit_card", url: "/debit" },
        { key: 'Cupón de Pago', icon:"receipt", url: "/coupon" },
        { key: 'Tarifa Social', icon:"store", url: "/socialrate" }
      ] },
      { key: 'Delegaciones', icon:"account_box", subitems: [
        { key: 'Compartir Servicio', icon:"person_add", url: "/delegate" },
        { key: 'Servicios Compartidos', icon:"supervisor_account", url: "/delegated" },
        { key: 'Servicios de Terceros', icon:"perm_identity", url: "/thirdparty" }
      ] },
      { key: 'Servicio Técnico', icon:"build", subitems: [
        { key: 'Reclamos', icon:"contact_phone", url: "/demand" },
        { key: 'Consultas', icon:"message", url: "/consultation" }
      ] }
  ];

  get menuItems() : MenuItem [] {
    return this._menuItems;
  }

}

declare var google: any;
@Injectable()
export class GMapsService extends GoogleMapsAPIWrapper{
    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);
    }

    getLatLan(address: string) {
        console.log('Getting Address - ', address);
        let geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        })
    }

    getGeoLocation(lat: number, lng: number) {
      if (navigator.geolocation) {
          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(lat, lng);
          let request = { latLng: latlng };

          return Observable.create(observer => {
            geocoder.geocode(request, (results, status) => {
              if (status == google.maps.GeocoderStatus.OK) {
                observer.next(results[0]);
                observer.complete();
                // let result = results[0];
                // let rsltAdrComponent = result.address_components;
                // let resultLength = rsltAdrComponent.length;
                // if (result != null) {
                //   this.marker.buildingNum = rsltAdrComponent[resultLength-8].short_name;
                //   this.marker.streetName = rsltAdrComponent[resultLength-7].short_name;
                // } else {
                //   alert("No address available!");
                // }
              } else {
                  console.log('Error - ', results, ' & Status - ', status);
                  observer.next({});
                  observer.complete();
              }
            });
          })
      }
    }
}
