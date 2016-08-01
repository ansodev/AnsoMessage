import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FriendsPage } from '../friends/friends';

@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {

  rootPage: any = HomePage;
  home: any = HomePage;
  friends: any = FriendsPage;

  constructor(private nav: NavController) {

  }

  onMenu(page) {
    this.rootPage = page;
  }

}
