import { A } from '@ember/array';
import Service from '@ember/service';

export default class PeopleService extends Service {
  people = A([]);

  add(person) {
    this.people.createRecord(person);
  }

  remove(person) {
    this.people.destroyRecord(person);
  }
}
