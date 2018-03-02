/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-02-28T02:11:26-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: register.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-02T01:56:56-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create(username, password, email, college, department) {
      if(username === 'admin'){
        this.transitionToRoute('search')
      }
      else {
        this.set('hidden', true);
      }
    }
  }
});
