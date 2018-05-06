import { Component, ViewChild, HostListener, AfterViewInit, OnInit, OnDestroy, ElementRef  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Http } from '@angular/http';
import { MdSidenav } from "@angular/material";
import { Subscription } from 'rxjs/Subscription';
import { RootService } from '../rootservice';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { User } from '../model/user';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './main-component.html'
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChild('notificationsnav') notificationsnav: MdSidenav;
  loadingPage: boolean = false;
  loadingPageSubscription:Subscription;
  loggedUser:User;
  loggedUserSubscription:Subscription;
  inLoginPage:boolean;
  inLoginPageSubscription:Subscription;

  constructor(private rootService:RootService, private router:Router, translate: TranslateService,
                angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  }

  ngOnInit() {
    this.loadingPageSubscription = this.rootService.loadingPage$
       .subscribe(loadingPage => {
         setTimeout(() => {
                 //  this.getReceipts();
                  this.loadingPage = loadingPage
              });
       });

     this.inLoginPageSubscription = this.rootService.inLoginPage$
      .subscribe(inLoginPage => this.inLoginPage = inLoginPage);

    this.loggedUserSubscription = this.rootService.loggedUser$
      .subscribe(loggedUser => {
        this.loggedUser = loggedUser;

        if(!this.loggedUser){
          this.router.navigate(['/login']);
        }else{
          this.router.navigate(['/dashboard']);
        }
      });

      this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < 1060) {
        if(this.sidenav && this.sidenav.opened){
          this.sidenav.close();
          this.sidenav.mode = 'over';
        }
      }else{
        if(this.sidenav && !this.sidenav.opened){
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
  }

  ngAfterViewInit()  {
    if (this.sidenav && window.screen.width < 1060) {
      this.sidenav.close();
      this.sidenav.mode = 'over';
    }
  }

  toggleMobile(){
    if (this.sidenav && window.screen.width < 1060) {
        this.sidenav.close();
    }
  }

  logoClick(){
    if(this.loggedUser){
      this.router.navigate(['/dashboard']);
    }
  }

  goToSignup(){
    if(!this.loggedUser && this.inLoginPage){
      this.router.navigate(['/signup']);
    }
  }

  goToLogin(){
    if(!this.loggedUser && !this.inLoginPage){
      this.router.navigate(['/login']);
    }
  }

  logout(){
    this.rootService.destroyUser();
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.loadingPageSubscription.unsubscribe();
    this.loggedUserSubscription.unsubscribe();
    this.inLoginPageSubscription.unsubscribe();
  }

  done(){
    return;
  }

}
