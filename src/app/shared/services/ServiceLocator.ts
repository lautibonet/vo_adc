import {Injectable, Injector} from '@angular/core';
import {Http, Headers, RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ServiceLocator {

   private static _instance:ServiceLocator;

   filterMap:Map<string,any> = new Map<string,any>();

   constructor(private injector:Injector) {
     ServiceLocator._instance = this;
   }

   static instance() : ServiceLocator{
     return ServiceLocator._instance;
   }

   getService(token:any) : any {
     return this.injector.get(token)
   }

}
