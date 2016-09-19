import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages } from '../../util/messages';
import { Geolocation } from 'ionic-native';
import { MessageRoutePage } from '../message-route/message-route';
import { MessageViewPage } from '../message-view/message-view';

@Component({
  templateUrl: 'build/pages/message-read/message-read.html',
})
export class MessageReadPage {
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
      this.navController.push(MessageViewPage, { message });
    }

    private initPage() {
      this.messages.get(true, message => {
        this.messagesList.push(message);
      });
    }
}
