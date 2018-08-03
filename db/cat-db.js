'use strict';

const { Queue } = require('../models/queue');

const data = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Featured in bad commercial'
  },
  {
    imageURL:'http://www.catvet.ca/wp-content/uploads/2016/07/cathealth_kitty.jpg', 
    imageDescription: 'Tan-colored kitten pawing at the camera.',
    name: 'Buttons',
    sex: 'Female',
    age: 1,
    breed: 'Tabby',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://static.pexels.com/photos/20787/pexels-photo.jpg', 
    imageDescription: 'Grey siamese cat with bright green eyes, looking up to the camera.',
    name: 'Nacho',
    sex: 'Male',
    age: 3,
    breed: 'Siamese',
    story: 'Too smelly'
  }
];

const catDb = new Queue();

for (let i = 0; i < 30; i++) {
  data.forEach(each => catDb.enqueue(each));
}

module.exports = catDb;
