import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  firstLetter: DS.attr('string'),
  brand: DS.belongsTo('brand')
});
