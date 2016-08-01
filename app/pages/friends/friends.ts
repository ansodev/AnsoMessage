import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fire } from '../../util/fire';
import { FacebookLogin } from '../../util/facebook-login';

/*
  Generated class for the FriendsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/friends/friends.html',
})
export class FriendsPage {

  friends: any = [];

  constructor(private nav: NavController, private fire: Fire) {
    this.initPage();
  }

  private initPage() {
    FacebookLogin.getFriends(this.fire.user, friends => {
      this.friends = friends;
    });
  }

}
