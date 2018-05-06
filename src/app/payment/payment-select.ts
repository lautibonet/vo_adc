import { Component, OnInit } from '@angular/core';
import { OnlinePaymentMethod } from '../model/online_payment_method';
import { OnlinePaymentMethodService } from '../service-mock';
import { Action } from '../model/action';

@Component({
  selector: 'payment-select',
  templateUrl: './payment-select.html'
})
export class PaymentSelect implements OnInit{
  title:string = "Pago Online";
  actions:Array<Action> = [];
  selectedOnlinePaymentMethod:OnlinePaymentMethod;
  onlinePaymentMethods:OnlinePaymentMethod[];

  constructor(private onlinePaymentMethodService:OnlinePaymentMethodService){  }

  selectOnlinePaymentMethod(selectedOnlinePaymentMethod):void{
    this.selectedOnlinePaymentMethod = selectedOnlinePaymentMethod;
  }

  ngOnInit():void{
    this.getOnlinePaymentMethods();
  }

  getOnlinePaymentMethods():void{
    this.onlinePaymentMethodService.getOnlinePaymentMethods()
      .subscribe(onlinePaymentMethods => this.onlinePaymentMethods = onlinePaymentMethods);
  }

}
