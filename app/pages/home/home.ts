import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Messages } from '../../util/messages';
import { Geolocation } from 'ionic-native';
import { MessageRoutePage } from '../message-route/message-route';
import { MessageViewPage } from '../message-view/message-view';

declare var geolib: any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  messagesList: any = [];

  constructor(private navController: NavController,
    private messages: Messages) {
    this.initPage();
  }

  openRoute(message) {
    let directions = { latitude: message.lat, longitude: message.lng};

    this.navController.push(MessageRoutePage, { directions });
  }

  openMessage(message) {
    if (this.isNear(message)) {
      this.navController.push(MessageViewPage, { message });
    }
    else {
      alert('Mensagem está muito distante.');
    }
  }

  private isNear(message) {
    return message.distance <= 0.3;
  }

  private initPage() {
    this.messages.get(message => {
      this.messagesList.push(message);
    });

    setInterval(() => {
      this.getAllDistances();
    }, 3000);
  }

  private getAllDistances() {
    Geolocation.getCurrentPosition().then(resp => {
      for (let i = 0; i < this.messagesList.length; i++) {
        let message = this.messagesList[i];

        message.distance = this.getDistance(
          {latitude: resp.coords.latitude,
          longitude: resp.coords.longitude},
          {latitude: message.lat,
          longitude: message.lng}
        )
      }
    });
  }

  private getDistance(origin, destination) {
    let distance = geolib.getDistance(origin, destination);

    return geolib.convertUnit('km', distance, 2);
  }
}
