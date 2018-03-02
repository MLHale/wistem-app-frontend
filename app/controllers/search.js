/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-02-28T02:11:26-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: search.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-01T22:31:26-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Controller from '@ember/controller';

export default Controller.extend({
  sources: ['Federal Government','State Government','Local Government','Internal','Private Industry'],
  actions: {

    /* Dialog */
    openDialog(item, event) {
      this.set('dialogOrigin', $(event.currentTarget));
      this.set('selectedAward', item);
      this.set('showDialog', true);
    },

    closeDialog(result) {
      this.set('result', result);
      this.set('showDialog', false);
    },

    flatButton(title, fields, applicanttype, description, url, sponsor){
      alert('You are searching for title ' + title + ' Fields: ' + fields +
            ' Applicant types: ' + applicanttype + ' description ' + description +
            ' url ' + url + ' sponsor ' + sponsor);
    },
  }
});
