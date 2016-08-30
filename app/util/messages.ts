import { Injectable } from '@angular/core';
import { Fire } from './fire';

@Injectable()
export class Messages {
  firebase: any;
  user: any;

  constructor(fire: Fire) {
    this.firebase = fire.getDB();
    this.user = fire.user;
  }

  send(friend, message, position) {
    let ref = this.firebase.database().ref();

    return ref.child('messages').child(friend.id).push().set({
      senderId: this.user.id,
      senderName: this.user.name,
      message: message,
      lat: position.lat,
      lng: position.lng,
      address: position.address,
      read: false
    });
  }

  get(successCallback) {
    let ref = this.firebase.database().ref('messages').child(this.user.id);

    ref.orderByChild('read').equalTo(false).on('child_added', (snapshot) => {
      let message = snapshot.val();

      message.map =  "https://maps.googleapis.com/maps/api/staticmap?center=" +
        message.lat + ", " + message.lng +
        "&zoom=15&size=400x400" +
        "&markers=color:red%7Clabel:S%7C" +
        message.lat + ", " + message.lng +
        "&maptype=roadmap&key=AIzaSyBst0zq0LAxMY09cHkYffDgfkr_jDt68Sg";

      successCallback(message);
    })
  }
}
