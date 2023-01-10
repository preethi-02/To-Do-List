import DS from 'ember-data';

export default DS.Model.extend({
    firstname:DS.attr('string'),
    lastname:DS.attr('string'),
    dob:DS.attr('date'),
    email :DS.attr('string'),
    password:DS.attr('string'),
    phoneno:DS.attr('number'),
    // todos:DS.hasMany('todos',{async:true})
    
});

