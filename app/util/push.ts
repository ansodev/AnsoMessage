declare var window: any;

export class Push {
  static init() {
    window.plugins.OneSignal.init("0bd7b792-19a9-4a72-8837-a8b38a07316f",
      {googleProjectNumber: "755735983443"}, (jsonData) => {
        alert(JSON.stringify(jsonData));
      });
  }
}
