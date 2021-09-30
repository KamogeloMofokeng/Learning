import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | router', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('router');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('router', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
