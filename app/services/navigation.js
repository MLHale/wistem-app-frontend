/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-03-01T00:29:43-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: navigation.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-03-01T00:34:29-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



import Service from '@ember/service';
import ArrayProxy from '@ember/array/proxy';
import { A } from '@ember/array';

export default Service.extend({
  externalmenuitems: ArrayProxy.create({ content: A([

  ]) }),
  internalmenuitems: ArrayProxy.create({ content: A([
      {route: 'index', icon: 'home', title: 'home'}
  ]) }),
  dynamicbuttons: ArrayProxy.create({content: A()}),
});
