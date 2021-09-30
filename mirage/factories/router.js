import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName: null,
  lastName: null,

  gender(i) {
    let genders = ['Female', 'Male'];

    return genders[i % genders.length];
  },
});
