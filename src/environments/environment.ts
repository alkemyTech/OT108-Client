// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: "http://ongapi.alkemy.org/api",
  members: "http://ongapi.alkemy.org/api/members",
  categories: "http://ongapi.alkemy.org/api/categories",
  organization: "http://ongapi.alkemy.org/api/organization",
  activities: "http://ongapi.alkemy.org/api/activities",
  slides: "http://ongapi.alkemy.org/api/slides",
  contacts: "http://ongapi.alkemy.org/api/contacts",
  Login: "http://ongapi.alkemy.org/api/login",
  Register: "http://ongapi.alkemy.org/api/register",
  news: "http://ongapi.alkemy.org/api/news",

  firebaseConfig: {
    apiKey: "AIzaSyAyyZ4ia5WiLtC6nAFrzWu43ZSEJD5BDGU",
    authDomain: "somosmas-335419.firebaseapp.com",
    projectId: "somosmas-335419",
    storageBucket: "somosmas-335419.appspot.com",
    messagingSenderId: "190541150638",
    appId: "1:190541150638:web:729bdc277973cca982f03f",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
