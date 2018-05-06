import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {ServiceLocator} from './ServiceLocator';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import 'rxjs/Rx';

export enum LoadingState {Start, Busy, Timeout, Stop}

@Injectable()
export class LoadingService {

   subject:Subject<LoadingState>;
   counter:number = 0;
   timeout:number = 300000;
   delay:number = 500;
   startTaskTimer:any;
   timeoutTimer:any;

   constructor(private serviceLocator:ServiceLocator) {

      this.subject = new Subject<LoadingState>();

      this.register().subscribe(loading => {

        if (loading == LoadingState.Start) {

          this.timeoutTimer = setTimeout(() => {

             this.counter = 0;
             this.clearTimers();
             this.subject.next(LoadingState.Timeout);

          }, this.timeout);

        }


      });

   }

   startLoading(){

     this.counter++;

     if (this.counter == 1) {

       this.subject.next(LoadingState.Start);

       this.startTaskTimer = setTimeout(() => {

         if (this.counter <= 0) {
           return;
         }

         this.subject.next(LoadingState.Busy);

       }, this.delay);


     }

   }

   stopLoading(){

    this.counter--;

    if (this.counter <= 0) {
       this.clearTimers();
       this.subject.next(LoadingState.Stop);
    }

   }

   private clearTimers() {

     if (this.startTaskTimer) {
       clearTimeout(this.startTaskTimer);
       this.startTaskTimer = undefined;
     }

     if (this.timeoutTimer) {
       clearTimeout(this.timeoutTimer);
       this.timeoutTimer = undefined;
      }

    }

   register() : Observable<LoadingState>{
     return this.subject.asObservable().share();
   }

}
