import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacebookLogin} from '../../util/facebook-login';
import {Fire} from '../../util/fire';
import {MenuPage} from '../menu/menu';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private nav: NavController, private fire: Fire) {

  }

  onLogin() {
    FacebookLogin.login(response => {
      this.fire.login(response.accessToken, () => {
        this.nav.setRoot(MenuPage);
      }, error => {
        alert(error);
      })
    }, error => {
      alert(error.errorMessage);
    });
  }

}
