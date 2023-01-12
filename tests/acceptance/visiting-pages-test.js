import { module, test } from 'qunit';
import { visit, currentURL,click,pauseTest} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visiting pages', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting sign-in page', async function(assert) {
    assert.expect(2);
    await visit('/');
    await click('[data-test-signin]');
    assert.equal(currentURL(), '/sign-in','sign in page is visited from index');
    await visit('/sign-up');
    await click('[data-test-signin-link]');
    assert.equal(currentURL(), '/sign-in','sign in page is visited from sign-up');
  });
  test('visiting sign-up page', async function(assert) {
    assert.expect(2);
    await visit('/');
    await click('[data-test-signup]');
    assert.equal(currentURL(), '/sign-up','sign up page is visited from index');
    await visit('/sign-in');
    await click('[data-test-signup-link]');
    assert.equal(currentURL(),'/sign-up','sign up page is visited from sign-in');
  });

  test('visiting completed page', async function(assert) {
    assert.expect(2);
    localStorage.setItem('login','true');
    await visit('/home');
    await click('[data-test-completed]');
    assert.equal(currentURL(), '/completed','successfully visited completed page from home page');
    await visit('/pending');
    await click('[data-test-completed-link]');
    assert.equal(currentURL(), '/completed','successfully visited completed page from pending page');

  });

  test('visiting pending page', async function(assert) {
    assert.expect(2);
    localStorage.setItem('login','true');
    await visit('/home');
    await click('[data-test-pending]');
    assert.equal(currentURL(), '/pending','successfully visited pending page from home page');
    await visit('/completed');
    await click('[data-test-pending-link]');
    assert.equal(currentURL(), '/pending','successfully visited pending page from completed page');
  });

  test('visiting home page',async function(assert){
    assert.expect(2);
    localStorage.setItem('login','true');
    await visit('/completed');
    await click('[data-test-home]');
    assert.equal(currentURL(),'/home','home is visited from completed page');
    await visit('/pending');
    await click('[data-test-home-link]');
    assert.equal(currentURL(),'/home','home is visited from pending page')
  })
});
