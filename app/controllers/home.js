import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        createToDo(){
            var input=document.getElementById('input');
            if(input.value!==undefined && input.value!==""){
                let currentUser=localStorage.getItem('currentUser');
                this.store.createRecord('todo',{
                    title:input.value,
                    isCompleted:false,
                    user:currentUser
                }).save();
                input.value="";
                window.location.reload(true);

            }
        },
        
    }

});

