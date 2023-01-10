import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        if(localStorage.getItem("login")==='false'){
            this.transitionTo('sign-in');
        }
    },
    model(){
        return this.store.query('todo',{
            filter:{
                isCompleted:true,
                user:localStorage.getItem('currentUser')
            }
        })
    }
});
