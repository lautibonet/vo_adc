import {OnInit, Type, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Directive,OnDestroy,Input, Component, ElementRef, EventEmitter, Output, Injectable, Renderer,ViewChildren, Query} from '@angular/core';

import {LoadingState, LoadingService} from '../services/LoadingService';

@Component({
  //moduleId: module.id,
  selector: 'loading-indicator',
  template: `<md-progress-bar mode="indeterminate" *ngIf="visible"></md-progress-bar>`,

})
export class LoadingIndicator implements OnDestroy {

  public visible:boolean = false;
  private subscription:any;

  constructor(loadingService:LoadingService){

    this.subscription = loadingService.register().subscribe(loading => {this.visible = LoadingState.Start == loading});

  }

  ngOnDestroy():any {
    this.subscription.unsubscribe();
  }
}


@Directive({
  selector: '[check-loading]'
})
export class CheckLoading implements OnDestroy {

  private visible:boolean = false;
  private subscription:any;

  @Input("check-loading") checkLoading:boolean;

  constructor(protected element: ElementRef, protected renderer:Renderer, loadingService:LoadingService) {

      this.subscription = loadingService.register().subscribe(loading => {

        var el = this.element.nativeElement;

        this.visible = LoadingState.Busy == loading || LoadingState.Start == loading

        console.log("CheckLoading " , this.visible, !this.checkLoading, this.visible || this.checkLoading)

        this.renderer.setElementProperty(el, "disabled", this.visible || !this.checkLoading);

      });

  }

  ngOnDestroy():any {
    this.subscription.unsubscribe();
  }


}


@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
