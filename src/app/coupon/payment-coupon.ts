import { Component } from '@angular/core';
import { Action } from '../model/action';
import { Service } from '../model/service';
import { ServiceService, UserService } from '../service-mock';

@Component({
  selector: 'payment-coupon',
  templateUrl: './payment-coupon.html'
})
export class PaymentCoupon {
  title:string = "Obtener cupón de pago";
  actions:Array<Action> = [];
  submitted:boolean = false;
  couponServices:Array<Service>;
  searchError:boolean = false;
  model:any = {
    couponOption: 0
  };
  documentTypeOptions:any[] = [
    { id: 1, display_name: "DNI" },
    { id: 2, display_name: "CUIT" }
  ];
  sexOptions:any[] = [
    { id: "M", display_name: "Masculino" },
    { id: "F", display_name: "Femenino" }
  ];

  constructor(
    private serviceService:ServiceService,
    private userService:UserService
  ){ }

  continue(){
    this.submitted = true;
    this.couponServices = null;

    setTimeout(() => {
             this.getCouponServices();
         }, 0);

  }

  clear(){
    this.submitted = false;
  }

  getCouponServices(){
    this.searchError = false;
    if(this.model.couponOption == 0){
      this.userService.getUsers().subscribe(users => {
        var user = users.find(u => u.documentNumber == this.model.documentNumber);

        if(user){
          this.serviceService.getServices().subscribe(services => {
            this.couponServices = services.filter(s => s.owner_id == user.id);
          });
        }else{
          this.clear();
          this.searchError = true;
        }

      });
    }else{
      if(this.model.couponOption == 1){
        this.serviceService.getServices().subscribe(services => {
          this.couponServices = services.filter(s => s.identifier == this.model.serviceNumber);

          if(!this.couponServices || this.couponServices.length <= 0){
            this.clear();
            this.searchError = true;
          }
        });
      }
    }
  }

}
