import Route from '@ember/routing/route';

export default Route.extend({
  getData(){
    let items = Ember.A([]);
    items.addObject({
      id: 1,

      title: 'Award for awesomeness Number 1',
      description: 'description',
      award_link: 'https://gogole.com',
      sponsor_org: 'Whats in this one?',
      stem_field: [
        "Science", "Math", "Technology"
      ],
      recurring: true,
      nom_req: false,
      recur_interval: 'yearly',
      open_date: '2017-11-03',
      nom_deadline: '2018-11-03',
      subm_deadline: '2018-11-03',
      applicant_type: 'Type',
      award_purpose: [
        "Science", "Math", "Technology"
      ],
      additional_info: 'a long text',
      source: 'Somewhere',
      previous_applicants: 20,
      created_by: 'Ties to profile',
      created_on: '2017-10-03',


      category: 'cat1',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      typeofapplicant: [
        "Faculty", "Student", "Staff"
      ]

    });
    items.addObject({
      id: 2,

      title: 'Award for awesomeness Number 2',
      description: 'description',
      award_link: 'https://gogole.com',
      sponsor_org: 'Whats in this one?',
      stem_field: [
        "Science", "Math", "Technology"
      ],
      recurring: true,
      nom_req: false,
      recur_interval: 'yearly',
      open_date: '2017-11-03',
      nom_deadline: '2018-11-03',
      subm_deadline: '2018-11-03',
      applicant_type: 'Type',
      award_purpose: [
        "Science", "Math", "Technology"
      ],
      additional_info: 'a long text',
      source: 'Somewhere',
      previous_applicants: 20,
      created_by: 'Ties to profile',
      created_on: '2017-10-03',


      category: 'cat1',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      typeofapplicant: [
        "Faculty", "Student", "Staff"
      ]
    });
    items.addObject({
      id: 3,

      title: 'Award for awesomeness Number 3',
      description: 'description',
      award_link: 'https://gogole.com',
      sponsor_org: 'Whats in this one?',
      stem_field: [
        "Science", "Math", "Technology"
      ],
      recurring: true,
      nom_req: false,
      recur_interval: 'yearly',
      open_date: '2017-11-03',
      nom_deadline: '2018-11-03',
      subm_deadline: '2018-11-03',
      applicant_type: 'Type',
      award_purpose: [
        "Science", "Math", "Technology"
      ],
      additional_info: 'a long text',
      source: 'Somewhere',
      previous_applicants: 20,
      created_by: 'Ties to profile',
      created_on: '2017-10-03',


      category: 'cat1',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      typeofapplicant: [
        "Faculty", "Student", "Staff"
      ]
    });
    items.addObject({
      id: 4,

      title: 'Award for awesomeness Number 4',
      description: 'description',
      award_link: 'https://gogole.com',
      sponsor_org: 'Whats in this one?',
      stem_field: [
        "Science", "Math", "Technology"
      ],
      recurring: true,
      nom_req: false,
      recur_interval: 'yearly',
      open_date: '2017-11-03',
      nom_deadline: '2018-11-03',
      subm_deadline: '2018-11-03',
      applicant_type: 'Type',
      award_purpose: [
        "Science", "Math", "Technology"
      ],
      additional_info: 'a long text',
      source: 'Somewhere',
      previous_applicants: 20,
      created_by: 'Ties to profile',
      created_on: '2017-10-03',


      category: 'cat1',
      requirements: 'string for now, requirements',
      criteria: 'string for criteriat',
      typeofapplicant: [
        "Faculty", "Student", "Staff"
      ]
    });
    return items;
  },

  model() {
    let data = {
        awards: this.getData(),
        stemfields: this.getStemFields()
      };
    return data;
  },
  getStemFields() {
    let items = Ember.A([]);
    items.addObject("Math");
    items.addObject("Science");
    items.addObject("Technology");
    items.addObject("Engineering");
    return items
  }

});
