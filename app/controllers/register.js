/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-02-28T02:11:26-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: register.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-02T02:40:50-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
  actions: {
    register: function(){
      this.set('validationErrorMsg', '');
      var user = this.get('model');
      var controller = this;

      //probably want to do some additional validation here
      if(user.get('password') === this.get('confirmpassword')){
        if(user.get('email') === user.get('confirmemail')){
          var requestdata = {
            'username': user.get("username"),
            'password': user.get('password'),
            'email': user.get('email'),
          };
          Ember.$.post(config.serverName+'/api/register/', requestdata, function(response){
            var errMsg = '';
            if(response.data.status ==="error"){
              if(response.data.username){
                errMsg = response.data.username;
              }
              else if(response.data.email){
                errMsg = response.data.email;
              }
              else {
                errMsg = "An unknown error occured. Please try again";
              }
              controller.set('validationErrorMsg', errMsg);
              auth.get('notifications').warning(`${this.get('validationErrorMsg')}`, {
      					clearDuration: 3000,
      					autoClear: true
      				});
            }
            else{
              //success
              controller.set('success', true);
              controller.get('auth').set('username',user.get('username'))
              controller.get('auth').set('password',user.get('password'))
              auth.get('notifications').success(`Successful registration.`, {
      					clearDuration: 3000,
      					autoClear: true
      				});
              controller.transitionToRoute('login');
            }


          });
        }
        else {
          this.set('validationErrorMsg', 'Emails don\'t match');
          auth.get('notifications').warning(`${this.get('validationErrorMsg')}`, {
  					clearDuration: 3000,
  					autoClear: true
  				});
        }
      }
      else {
        this.set('validationErrorMsg', 'Passwords don\'t match');
        auth.get('notifications').warning(`${this.get('validationErrorMsg')}`, {
					clearDuration: 3000,
					autoClear: true
				});
      }

    }
  }
});
