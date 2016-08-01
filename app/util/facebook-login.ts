import {Facebook} from 'ionic-native';

export class FacebookLogin {
  static login(successCallback, errorCallback) {
    Facebook.login(['user_friends']).then(response => {
      successCallback(response.authResponse);
    }, error => {
      errorCallback(error);
    })
  }

  static getFriends(user, successCallback) {
    Facebook.api('me/friends?access_token=' + user.token, []).then(response => {
      let friends = response.data;
      successCallback(friends);
    })
  }
}
