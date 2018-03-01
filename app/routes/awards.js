/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-02-28T02:12:57-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: awards.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-01T01:23:44-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll('award', {include: 'applicanttypes,awardpurposes,stemfields,createdby,createdby.areasofinterest,createdby.user'});
  }
});
