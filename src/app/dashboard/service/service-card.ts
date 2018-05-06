import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { Service } from '../../model/service';
import { Receipt } from '../../model/receipt';
import { Period } from '../../model/period';
import { ReceiptService, GraphService, PeriodService } from '../../service-mock';
import { RootService } from '../../rootservice';
import { Graph } from '../../model/graph';
// import 'rxjs/add/observable/forkJoin';
// import { HttpClient } from '@angular/common/http';

@Component({
  animations: [
    trigger('expandCollapse', [
         state('open', style({
             'height': '*'
         })),
         state('close', style({
             'height': '0px',
             'overflow': 'hidden'
         })),
         transition('open <=> close', animate('300ms ease-out'))
     ])
  ],
  selector: 'service-card',
  templateUrl: './service-card.html'
})
export class ServiceCard implements OnInit{
  @Input() service:Service;
  @Input() expanded:boolean = false;
  detailsShown: string = 'close';
  receipts: Array<Receipt> = null;
  graphs: Array<Graph>;
  periods: Array<Period>;
  shared_withTooltip:string;
  isDelegated:boolean;

  constructor(
    private receiptService:ReceiptService,
    private graphService:GraphService,
    private rootService:RootService,
    private periodService:PeriodService
    // private http: HttpClient
  ) {}

  ngOnInit():void{
    this.getReceipts();

    if(this.expanded)
      this.showDetails();

    this.rootService.loggedUser$.subscribe(u => {
      this.isDelegated = u.id != this.service.owner_id;
    });
  }

  getReceipts(): void {
    this.receiptService.getReceipts().subscribe(receipts => {
      this.receipts = receipts.filter(r => r.identifier == this.service.identifier);
    });
  }

  getGraphs(): void {
    this.graphService.getGraphs().subscribe(graphs => this.graphs = graphs);
  }

  getPeriods(): void{
    this.periodService.getPeriods().subscribe(periods => this.periods = periods);
  }

  showDetails() {
    this.detailsShown = (this.detailsShown == 'open') ? 'close' : 'open';

    // Observable.forkJoin(
    //   this.http.get('./friends.json').map((res: Response) => res.json()),
    //   this.http.get('./customer.json').map((res: Response) => res.json())
    // ).subscribe(res => this.combined = {friends: res[0].friends, customer: res[1]});

    if(!this.graphs)
      setTimeout(() => {
               this.getGraphs();
           }, 0);

   if(!this.periods)
     setTimeout(() => {
              this.getPeriods();
          }, 0);
  }

  createDelegatesTooltip():string{
    var shared_withTooltip = "";

    for(let i = 1; i < this.service.shared_with.length; i++){
      shared_withTooltip += this.service.shared_with[i] + " ";
    }

    return shared_withTooltip;
  }

  calcularDeuda() {
    var total = 0;
    if(this.receipts && this.receipts.length > 0){
      for (let recibo of this.receipts.filter(r => (r.selected || r.selected === undefined) && r.is_payable)){
        total += recibo.balance;
      }
    }else{
      total = this.service.debt;
    }
    return total;
  }

  isOverdueReceipt(due_date_string):boolean{
    var parts:any[] = due_date_string.split('/');
    //please pay attention to parts[1]-1. Javascript counts months starting form 0.
    var due_date = new Date(parts[2],parts[1]-1, parts[0]);

    return new Date() > due_date;
  }

  overdueReceipts():Array<Receipt>{
    return this.receipts? this.receipts.filter(r => this.isOverdueReceipt(r.due_date)) : [];
  }

  pad(num):string {
    if(num < 10){
      return "0" + num;
    }

    return num;
  }
}
