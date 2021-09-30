import Route from '@ember/routing/route';

export default class RouterRoute extends Route {
  model() {
    return this.store.findAll('person');
  }
}
