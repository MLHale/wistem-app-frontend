import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    submitButton : function(){
      console.log("You have edited an award");
    },
    addsubmitButton : function()
    {
      console.log("You have added  new award");
    }
  }
});
