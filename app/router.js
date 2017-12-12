import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search');
  this.route('register');
  this.route('login');
  this.route('awardinfo');
  this.route('home');
  this.route('about');
  this.route('contact');
  this.route('awards');
  this.route('AddAward');
  this.route('EditAward');
});

export default Router;
