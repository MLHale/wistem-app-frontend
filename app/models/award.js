import DS from 'ember-data';

export default DS.Model.extend({

  AwardTitle: DS.attr('string'),
  AwardDescription: DS.attr('string'),
  AwardLink: DS.attr('string'),
  STEMType: DS.attr('string'),
  AwardSponsor: DS.attr('string'),
  STEMField: DS.attr('string'),
  OpenDate: DS.attr('date', { defaultValue() { return new Date(); } }),
  SubmissionDate: DS.attr('date'),
  ApplicantType: DS.attr('string'),

});
