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
      console.log(username);
      console.log(password);
      if(username === 'admin' && password === 'password'){
        console.log('success');
        this.set('currentuser', user);
        console.log(this.get('currentuser'))
      }
      else
      this.set('hidden', false);
      {
        console.log('failure');
        return ('Wrong username and/or password')
      }

   }
  }
});
