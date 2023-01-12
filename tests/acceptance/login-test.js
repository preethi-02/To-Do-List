import { module, test } from 'qunit';
import { visit, currentURL,click, pauseTest,fillIn} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);


  
  test('should login successfully',async function(assert){
    await visit('/sign-in');
    await fillIn('.data-test-email','harry@gmail.com');
    await fillIn('.data-test-password','1234');
    await click('[data-test-login]');
    assert.equal(currentURL(),'/home',"login successful")
  })

  test("should logout",async function(assert){
    assert.expect(3);
    await visit('/home');
    await click('[data-test-logout]');
    assert.equal(localStorage.getItem('login'),'false',"successfully logged out from home page")
    await visit('/completed');
    await click('[data-test-logout]');
    assert.equal(localStorage.getItem('login'),'false',"successfully logged out from completed page")
    await visit('/pending');
    await click('[data-test-logout]');
    assert.equal(localStorage.getItem('login'),'false',"successfully logged out from pending page")
  })
});
