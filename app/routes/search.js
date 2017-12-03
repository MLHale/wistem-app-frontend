import Route from '@ember/routing/route';

export default Route.extend({
  getData(){
    var items = Ember.A([]);
    items.addObject({
      id: 1,
      category: 'cat1',
      deadline: '2017-12-03',
      openingdate: '2017-11-03',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      url: 'https://google.com',
      stemfields: 'String for now, stem',
      name: 'Award for awesomeness',
      typeofapplicant: 'string applicant',
      awardsource: 'string source',
      nominationrequired: false,
      description: 'string description',
      additionalinfo: 'string of info',
      recurring: true

    });
    items.addObject({
      id: 2,
      category: 'cat1',
      deadline: '2017-12-03',
      openingdate: '2017-11-03',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      url: 'https://google.com',
      stemfields: 'String for now, stem',
      name: 'Award for awesomeness',
      typeofapplicant: 'string applicant',
      awardsource: 'string source',
      nominationrequired: false,
      description: 'string description',
      additionalinfo: 'string of info',
      recurring: true
    });
    items.addObject({
      id: 3,
      category: 'cat1',
      deadline: '2017-12-03',
      openingdate: '2017-11-03',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      url: 'https://google.com',
      stemfields: 'String for now, stem',
      name: 'Award for awesomeness',
      typeofapplicant: 'string applicant',
      awardsource: 'string source',
      nominationrequired: false,
      description: 'string description',
      additionalinfo: 'string of info',
      recurring: true
    });
    items.addObject({
      id: 4,
      category: 'cat1',
      deadline: '2017-12-03',
      openingdate: '2017-11-03',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      url: 'https://google.com',
      stemfields: 'String for now, stem',
      name: 'Award for awesomeness',
      typeofapplicant: 'string applicant',
      awardsource: 'string source',
      nominationrequired: false,
      description: 'string description',
      additionalinfo: 'string of info',
      recurring: true
    });
    return items;
  },

  model() {
    return this.getData();
  }
});
