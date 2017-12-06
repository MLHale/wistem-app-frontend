import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('home');
  this.route('login');
  this.route('register');
  this.route('awardinfo');
=======
  this.route('search');
>>>>>>> 904a7c8ce59786e211ae6a344077ecd104a0e268
});

export default Router;
