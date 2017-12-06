import Controller from '@ember/controller';

export default Controller.extend({
  actions: {

    /* Dialog */
    openDialog(item, event) {
      console.log(event);
      console.log(item);
      this.set('dialogOrigin', $(event.currentTarget));
      this.set('selectedAward', item);
      this.set('showDialog', true);
    },

    closeDialog(result) {
      this.set('result', result);
      this.set('showDialog', false);
    },

    flatButton(title, fields){
      console.log(title);

      alert('You are searching for ' + title + fields);


    }


  }
});
