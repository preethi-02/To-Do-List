import Controller from '@ember/controller';
// import Ember from 'ember';

export default Controller.extend({
    actions:{
        submitform(){
            let{firstname,lastname,dob,phoneno,email,password,confirmpassword}=this.getProperties('firstname','lastname','dob','phoneno','email','password','confirmpassword');
            if(password===confirmpassword ){
                if(phoneno.length===10){
                this.store.createRecord('user',{
                    firstname:firstname,
                    lastname:lastname,
                    dob:dob,
                    email:email,
                    password:password,
                    phoneno:phoneno
                }).save();
                localStorage.setItem("currentUser",email);
                localStorage.setItem('login',true);
                this.transitionToRoute('home')
            }
            else{
                alert("please enter the valid phone no");
            }}
            else{
                alert("please check the password");
            }
            
        }
    }
});
