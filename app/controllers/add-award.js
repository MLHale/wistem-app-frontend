import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    addsubmitButton : function()
    {
      var data = {
        'awardTitle' : this.get('awardTitle'),
        'awardDescription' : this.get('awardDescription'),
        'awardLink' : this.get('awardLink'),
        'stemType' : this.get('stemType'),
        'awardSponsor' : this.get('awardSponsor'),
        'stemField' : this.get('stemField'),
      }
      Ember.$.post(config.domainURL+'/api/add-award/', data, function(response){
        if(response.data){
          console.log(response.data);
        }
      });
      this.get('router').transitionTo('awards');
    }
  }
});
