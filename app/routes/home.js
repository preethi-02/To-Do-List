import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    beforeModel(){
        if(localStorage.getItem("login")==='false'){
            this.transitionTo('sign-in');
        }
    },
    model(){
        return RSVP.hash({
            todos:this.store.query('todo',{
                filter:{
                    user:localStorage.getItem('currentUser')
                }
            }),
            users:this.store.query('user',{
                filter:{
                    user:localStorage.getItem('currentUser')
                }
            })
        })
        
    }
});