import {Facebook} from 'ionic-native';

export class FacebookLogin {
  static login(successCallback, errorCallback) {
    Facebook.login(['user_friends']).then(response => {
      successCallback(response.authResponse.userID);
    }, error => {
      errorCallback(error);
    })
  }
}
