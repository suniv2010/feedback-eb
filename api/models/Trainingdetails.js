/**
 * Trainingdetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    training: {type:'string'},
    trainers: {type:'json'},
    location: {type:'string'},
    from_date: {type:'string'},
    to_date: {type:'string'}
},
  datastores:'mongodb'
};

