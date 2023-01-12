import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest,click} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';


module('Integration | Component | to-do', function(hooks) {
  setupRenderingTest(hooks);


  hooks.beforeEach(function(){
    this.todo=EmberObject.extend({
      title:'new task',
      isCompleted:false,
      user:'harry@gmail.com'
    });
    this.todos=[
      this.todo.create({
        title:'new task',
        isCompleted:false,
        user:'harry@gmail.com'
      })
    ]
  });
  test('task rendering',async function(assert){
   await render(hbs `<ToDo @todos={{this.todos}}/>`);
   assert.equal(this.element.querySelector('li h3').textContent.trim(),'new task',"task component rendered successfully");
  })
});
