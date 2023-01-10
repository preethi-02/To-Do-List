import Component from '@ember/component';
import {inject} from '@ember/service'

export default Component.extend({
    tagName:'nav',
    classNames:['navbar','bg-secondary','text-white','mb-3'],
    router:inject(),
    actions:{
        logout(){
            localStorage.setItem("login",false);
            localStorage.setItem("currentUser",null);
            this.get('router').transitionTo('index');
        }
    }
});