/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-03-01T00:55:38-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: notification-messages.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-01T00:55:48-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



export function initialize(application) {
  application.inject('route', 'notifications', 'service:notification-messages');
  application.inject('controller', 'notifications', 'service:notification-messages');
  application.inject('component', 'notifications', 'service:notification-messages');

}

export default {
  name: 'notification-messages',
  initialize
};
