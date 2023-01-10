import DS from 'ember-data';

export default DS.Model.extend({
    title:DS.attr('string'),
    isCompleted:DS.attr('boolean'),
    // user:DS.belongsTo('user',{async:true})
    user:DS.attr('string')
});