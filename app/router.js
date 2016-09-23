import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('brands', function() {
    this.route('show', {
      path: ':brand_id'
    }, function(){
      this.route('factories', {resetNamespace: true}, function(){
      });
      this.route('series', {resetNamespace: true}, function() {
        this.route('show', {
          path: ':series_id'
        }, function(){
          this.route('models', {resetNamespace: true}, function() {});
        });
      });
    });
  });
});

export default Router;
