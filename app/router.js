import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('sign-in');
  this.route('sign-up');
  this.route('home');
  this.route('completed');
  this.route('pending');
});
