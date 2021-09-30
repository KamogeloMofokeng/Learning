import Model, { attr } from '@ember-data/model';

export default class RouterModel extends Model {
  @attr firstName;
  @attr lastName;
}
