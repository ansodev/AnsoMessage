import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var google: any;

@Component({
  templateUrl: 'build/pages/message-map/message-map.html',
})

export class MessageMapPage {

  constructor(private nav: NavController, platform: Platform) {

    platform.ready().then(() => {
      this.initPage();
    });
  }

  private initPage() {
    let latLng = new google.maps.LatLng(-23.5621313, -46.6562939);

    let mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    let element = document.getElementById('map');

    let map = new google.maps.Map(element, mapOptions);

    let marker = new google.maps.Marker({
      position: latLng
    });

    marker.setMap(map);
  }

}
