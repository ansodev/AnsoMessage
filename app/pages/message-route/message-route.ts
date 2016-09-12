import { Component } from '@angular/core';
import { NavController, NavParams, Platform} from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google: any;

@Component({
  templateUrl: 'build/pages/message-route/message-route.html',
})
export class MessageRoutePage {
  directions: any;
  map: any;

  constructor(private nav: NavController, private params: NavParams,
    private platform: Platform) {
    this.initPage();
  }

  private initPage() {
    this.directions = this.params.get('directions');

    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  private loadMap() {
    Geolocation.getCurrentPosition().then(resp => {
      let mapOptions = {
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      let mapDiv = document.getElementById('route-map');

      this.map = new google.maps.Map(mapDiv, mapOptions);

      this.calcRoute(resp.coords.latitude, resp.coords.longitude);
    });
  }

  private calcRoute(latitude: number, longitude: number) {
    let directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(this.map);

    let origin = new google.maps.LatLng(latitude, longitude);
    let destination = new google.maps.LatLng(this.directions.latitude, this.directions.longitude);

    let request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    let directionsService = new google.maps.DirectionsService();

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });
  }
}
