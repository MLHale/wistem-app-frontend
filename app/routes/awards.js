import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return[{
      id:1,
      name: 'Prestigeous Award',
      description: 'Given to the users who are working in the area for more than 30 years',
      awardType: 'important',
        image : 'http://mediad.publicbroadcasting.net/p/klcc/files/201704/awards.png',
    }, {
      id:2,
      name: 'Oscar Award',
      description: 'Given to the users who are working in the area for more than 20 years',
      awardType: 'important',
        image: 'http://www.naemsp.org/PublishingImages/Graphics-Buttons/awards.jpg',
    }, {
      id:3,
      name: 'National Award',
      description: 'Given to the users who are working in the area for more than 10 years',
      awardType: 'important',
      image: 'http://www.dhl.com/content/dam/Local_Images/g0/New_aboutus/company_portrait/image_gallery/awards/awards_2011_619x418.jpg',
    }, {
      id:4,
      name: 'Best Actor Award',
      description: 'Given to the users who are working in the area for more than 5 years',
      awardType: 'important',
      image: 'http://srts.info/wp-content/uploads/2014/09/gold-trophy.jpg',
    }];
  }
});
