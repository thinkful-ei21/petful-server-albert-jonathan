'use strict';

const { Queue } = require('../models/queue');

const data = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner was Walter White'
  },
  {
    imageURL: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/German-Shepherd-Dog-1.jpg',
    imageDescription: 'A German shepherd dog facing the camera, tongue out.',
    name: 'Tubby',
    sex: 'Female',
    age: 2,
    breed: 'German Shepherd',
    story: 'Too friendly'
  },
  {
    imageURL: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&amp;ext=jpg',
    imageDescription: 'Heterochromatic-eyed husky looking off into the distance.',
    name: 'Bamboo',
    sex: 'Male',
    age: 1,
    breed: 'Husky',
    story: 'Too successful in career'
  }
];

const dogDb = new Queue();

data.forEach(each => dogDb.enqueue(each));

module.exports = dogDb;
