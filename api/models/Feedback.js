/**
 * Articles.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    training: {type:'string'},
    trainers: {type:'string'},
    location:{type:'string'},
    date:{type:'string'},
    questions: {type:'json'}
},
  datastores:'mongodb'
};

