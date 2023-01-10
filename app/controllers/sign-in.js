import Controller from '@ember/controller';
// import Ember from 'ember';

export default Controller.extend({
    // store:Ember.inject.service(),
    isValidEmail:false,
    actions:{
        valid_email(email){
            if(email.includes('@',1)&& email.endsWith(".com")){
                let index=email.indexOf('@');
                if(email[index+1]!=='.'){
                    console.log(true);
                    this.set('isValidEmail',true);
                }
                else{
                    this.set('isValidEmail',false);
                }
                
            } 
            
        },
        login(){
            let {email,password}=this.getProperties('email','password');
            let self=this;
            this.send('valid_email',email);
            if(this.isValidEmail){
                this.store.query('user',{
                    filter:{
                        email:email
                    }
                }).then(function(user){
                    if(user.length!==0){
                        let a=user.firstObject;
                        if(password===a.password){
                            localStorage.setItem("currentUser",email);
                            localStorage.setItem('login',true);
                            self.transitionToRoute('home');
                        }
                        else{
                            alert("incorrect password");
                        } 
                    }
                    else{
                        alert("incorrect username");
                    }
                }).catch((reason)=>{
                    console.log(`Error:${reason}`);
                });
            }
            else{
                alert("invalid email id");
            }
        }
    }         

});
