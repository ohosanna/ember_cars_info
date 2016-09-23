import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  firstLetter: DS.attr('string'),
  factories: DS.hasMany('factory'),
  series: DS.hasMany('series')
});
