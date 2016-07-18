import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacebookLogin} from '../../util/facebook-login';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private nav: NavController) {

  }

  onLogin() {
    FacebookLogin.login(response => {
      alert(response);
    }, error => {
      alert(error.errorMessage);
    });
  }

}
