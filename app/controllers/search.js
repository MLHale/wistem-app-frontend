import Controller from '@ember/controller';

export default Controller.extend({
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
