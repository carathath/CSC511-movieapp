import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | useagain', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:useagain');
    assert.ok(route);
  });
});
