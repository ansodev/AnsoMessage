import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/message-view/message-view.html',
})
export class MessageViewPage {
  message: any = {};

  constructor(private nav: NavController, private params: NavParams) {
    this.initPage();
  }

  private initPage() {
    this.message = this.params.get('message');
  }

}
