/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-03-01T02:38:10-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: awards.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-01T02:41:59-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    openDialog(item, event) {
      this.set('dialogOrigin', $(event.currentTarget));
      this.set('selectedAward', item);
      this.set('showDialog', true);
    },
    closeDialog(result) {
      this.set('result', result);
      this.set('showDialog', false);
    },
    search(){

    },
  }
});
