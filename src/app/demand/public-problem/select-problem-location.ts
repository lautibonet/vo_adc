import { Component, Input, Output, DoCheck, EventEmitter, NgZone } from '@angular/core';
import { GMapsService } from '../../service-mock';

@Component({
  selector: 'select-problem-location',
  templateUrl: 'select-problem-location.html'
})
export class SelectProblemLocation {
  @Input() model:any;
  @Output() modelChange = new EventEmitter();
  marker:any = {};
  zoom:number;
  loading:boolean = false;

  constructor(private gmapService:GMapsService, private __zone: NgZone){}

  searchAddress(){
    this.loading = true;
    this.gmapService.getLatLan(this.model.address)
      .subscribe(result => {
            this.__zone.run(() => {
                  this.model.lat = result.lat();
                  this.model.lng = result.lng();
                  this.marker.lat = result.lat();
                  this.marker.lng = result.lng();
                  this.zoom = 14;
              });
              this.loading = false;
            },
          error => console.log(error),
            () => console.log('Geocoding completed!')
          );
  }

  mapClickEvent(e){
    this.loading = true;
    // console.log(e);
    this.model.lat = e.coords.lat;
    this.model.lng = e.coords.lng;
    this.marker.lat = e.coords.lat;
    this.marker.lng = e.coords.lng;
    this.zoom = 14;

    this.gmapService.getGeoLocation(this.model.lat, this.model.lng)
      .subscribe(result => {
        // console.log(result);
        this.model.address = result.formatted_address;
        this.loading = false;
      })
  }
}
