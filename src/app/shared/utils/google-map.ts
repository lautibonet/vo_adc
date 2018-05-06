import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'google-map',
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" (mapClick)="mapClickEvent($event)">
    <agm-marker [latitude]="marker.lat" [longitude]="marker.lng" *ngIf="marker"></agm-marker>
    <!-- <agm-polygon [paths]="paths" [fillOpacity]="fillOpacity" [strokeWeight]="strokeWeight"></agm-polygon> -->
  </agm-map>
  `
})
export class GoolgeMap implements OnInit{
  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number;
  @Input() marker:any;
  @Output() mapClick = new EventEmitter();
  // strokeWeight:number = 2;
  // fillOpacity:number = 0.1;
  // paths:any[] =  [{"lat":-35.7439584544989,"lng":-57.3466349428979},{"lat":-35.4443292327867,"lng":-57.0914582079423},
  // {"lat":-35.1798457948569,"lng":-57.2786146081258},{"lat":-35.0511001362819,"lng":-57.4434996156958},
  // {"lat":-34.9037096548301,"lng":-57.6949141574929},{"lat":-34.8154025153979,"lng":-57.8652389573072},
  // {"lat":-34.7654393341902,"lng":-58.0232450325398},{"lat":-34.938062860801,"lng":-58.2185040020902},
  // {"lat":-35.0141588157161,"lng":-58.3006909094683},{"lat":-35.055586253153,"lng":-58.2639169007836},
  // {"lat":-35.2174169158755,"lng":-58.4695700193784},{"lat":-35.4278176497477,"lng":-58.2321041501129},
  // {"lat":-35.4103063001807,"lng":-58.187977335862},{"lat":-35.4416508361399,"lng":-58.1288897550003},
  // {"lat":-35.3628295723085,"lng":-58.052645428201},{"lat":-35.3582038712662,"lng":-57.9930978658637},
  // {"lat":-35.4984995456163,"lng":-57.7439095047616},{"lat":-35.4971424988935,"lng":-57.5118028229205},
  // {"lat":-35.5998140459987,"lng":-57.4936131143206},{"lat":-35.684648047177,"lng":-57.4438350108662},
  // {"lat":-35.7439584544989,"lng":-57.3466349428979}];

  ngOnInit(){
    this.lat = -36.3482309;
    this.lng = -64.6456682;
    this.zoom = 5;
  }

  mapClickEvent(e){
    this.mapClick.next(e);
  }
}
