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
}
