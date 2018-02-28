import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create(username, password, email, college, department) {
      if(username === 'admin'){
        this.transitionToRoute('search')
      }
      else
      {
        this.set('hidden', true);
      }
    }
}});
