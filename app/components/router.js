import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RouterComponent extends Component {
  @tracked person;
  @service store;
  @tracked model = this.args.model.toArray();

  @action
  edit(person) {
    this.person = person;
  }

  @action
  add() {
    let person = this.store.createRecord('person');
    this.model.pushObject(person);
    this.person = person;
  }

  @action
  save(person) {
    person.save();
    this.person = undefined;
  }

  @action
  destroyRecord(person) {
    person.destroyRecord();
    this.model.removeObject(person);
  }

  @action
  cancel(person) {
    this.person = undefined;
    this.model.removeObject(person);
  }
}
