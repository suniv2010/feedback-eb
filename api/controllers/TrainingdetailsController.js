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
      },

      list:async function(req, res){
        Trainingdetails.find({}).exec(function(err,trainingdetails){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainingdetails)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      },

      details:async function(req, res){
        Trainingdetails.findOne({_id: req.params.id}).exec(function(err,trainingdetails){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainingdetails)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      }
    
};

