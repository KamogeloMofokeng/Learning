import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // queryRecord(store, type, query) {
  //   return fetch('/api/router');
  // }
  // router() {
  //   store.queryRecord('router', {}).then(function (router) {
  //     let firstName = person.get('router');
  //     let lastName = person.get('router');
  //   });
  // }
}
