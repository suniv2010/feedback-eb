/**
 * TrainingdetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add: function(req, res){
        var training = req.body.training;
        var trainers = req.body.trainers;
        Trainingdetails.create({training:training, trainers:trainers}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      }
};

