import Realm from 'realm';

let app;

// Returns the shared instance of the Realm app.
export function App() {
  if (app === undefined) {
    const appId = '<realm-coavl>'; // Set Realm app ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: 'default',
        version: '0',
      },
    };
    app = new Realm.App(appConfig);
  }
  return app;
}
