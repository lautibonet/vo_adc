import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './model/user';

@Injectable()
export class RootService {
  // Observable Item source
  private _loadingPage = new BehaviorSubject<boolean>(false);
  private _inLoginPage = new BehaviorSubject<boolean>(true);
  private _loggedUser = new BehaviorSubject<User>({
    id:1,
    documentNumber: 37384933,
    documentType: "DNI",
    documentTypeCode: "1",
    name: "Lautaro",
    lastname: "Bonet",
    fullname: "Lautaro Bonet"
  });



  // Observable Item stream
  loadingPage$ = this._loadingPage.asObservable();
  loggedUser$ = this._loggedUser.asObservable();
  inLoginPage$ = this._inLoginPage.asObservable();
  // service command
  setLoadingPage(value:boolean) {
    this._loadingPage.next(value);
  }
  setInLoginPage(value:boolean) {
    this._inLoginPage.next(value);
  }
  setLoggedUser(user:User) {
    this._loggedUser.next(user);
  }
  destroyUser(){
    this._loggedUser.next(null);
  }
}
