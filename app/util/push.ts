declare var window: any;

export class Push {
  static init() {
    window.plugins.OneSignal.init("0bd7b792-19a9-4a72-8837-a8b38a07316f",
      {googleProjectNumber: "755735983443"}, (jsonData) => {
        alert(JSON.stringify(jsonData));
      });
  }

  static getPushId(successCallback) {
    window.plugins.OneSignal.getIds(ids => {
      successCallback(ids.userId);
    });
  }

  static send(sender, destination, successCallback, errorCallback) {
    let notification = {
      contents: {
        en: `Seu amigo ${sender.name} deixou uma mensagem para você.`
      },
      include_player_ids: [destination.pushId]
    }

    window.plugins.OneSignal.postNotification(notification, response => {
      successCallback();
    }, (error) => {
      errorCallback(error);
    })
  }
}
