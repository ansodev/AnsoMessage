import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

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
    Geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }

  private getAddress(latLng, successCallback) {
    let geocoder = new google.maps.Geocoder;

    geocoder.geocode({location: latLng}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            successCallback(results[0].formatted_address);
          }
        }
    });
  }

  private loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);

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

    this.getAddress(latLng, address => {
      alert(address);
    })
  }

}
