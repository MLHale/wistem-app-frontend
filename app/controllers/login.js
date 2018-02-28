import Controller from '@ember/controller';


let user = {
  profile: {
    name: 'Admin',
    email: 'admin@unomaha.edu'
  }
};

export default Controller.extend({
  actions: {
    login(username, password) {
      if(username === 'admin' && password === 'password'){
        this.set('currentuser', user);
        this.transitionToRoute('search')
      }
      else
      {
        this.set('hidden', true);
      }

   }
  }
});
