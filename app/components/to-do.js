import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    store:Ember.inject.service(),
    variable:0,
    actions:{
        changeStatus(id,status){
            this.store.findRecord('todo',id).then(function(todo){
                todo.set('isCompleted',!status);
                todo.save();
            }).catch((reason)=>{
                console.log(`error:${reason}`);
            })
            window.location.reload(true);
        },
        edit(id){
            this.set("variable",id);
        },
        editTask(EditedTitle){ 
            // var modal=document.getElementById('EditWindow');
            this.store.findRecord('todo',this.variable).then(function(todo){
                todo.set('title',EditedTitle);
                todo.save();
            })
            window.location.reload(true);
        },
        deleteTask(id){ 
            this.store.findRecord('todo',id).then(function(todo){
                todo.deleteRecord();
                todo.save();
            }).catch((reason)=>{
                console.log(`error:${reason}`);
            })
        }
    }
});
