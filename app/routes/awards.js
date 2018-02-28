/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-02-28T02:12:57-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: awards.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-02-28T12:07:02-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // return[{
    //   id:1,
    //   name: 'Prestigeous Award',
    //   description: 'Given to the users who are working in the area for more than 30 years',
    //   awardType: 'important',
    //     image : 'http://mediad.publicbroadcasting.net/p/klcc/files/201704/awards.png',
    // }, {
    //   id:2,
    //   name: 'Oscar Award',
    //   description: 'Given to the users who are working in the area for more than 20 years',
    //   awardType: 'important',
    //     image: 'http://www.naemsp.org/PublishingImages/Graphics-Buttons/awards.jpg',
    // }, {
    //   id:3,
    //   name: 'National Award',
    //   description: 'Given to the users who are working in the area for more than 10 years',
    //   awardType: 'important',
    //   image: 'http://www.dhl.com/content/dam/Local_Images/g0/New_aboutus/company_portrait/image_gallery/awards/awards_2011_619x418.jpg',
    // }, {
    //   id:4,
    //   name: 'Best Actor Award',
    //   description: 'Given to the users who are working in the area for more than 5 years',
    //   awardType: 'important',
    //   image: 'http://srts.info/wp-content/uploads/2014/09/gold-trophy.jpg',
    // }];
    // var award = this.store.findRecord('award',1).then((record)=>{
    //   record.set('title','savable');
    //   record.save();
    // });
    return this.store.findAll('award', {include: 'applicanttypes,awardpurposes,stemfields,createdby'});
  }
});
