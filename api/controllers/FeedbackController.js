/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:async function(req, res){
      Feedback.find({}).exec(function(err,questions){
            if(err){
                  res.send(500,{error:'database error'});
            }
            //console.log(questions);
            return res.json(questions)
           // res.send("success", );
            //res.view('questions/list', { questions: questions });
           // res.view('articles/list', articles);
            //res.view('/articles/list',{articles:articles});
        })
          
    },
    
    add: function(req, res){
      res.view('articles/add');
  },
  create:function(req, res){
      //console.log(req.body);
      var training = req.body.training;
      var trainers = req.body.trainers;
      var questions = req.body.questions;
  
      Feedback.create({training:training, trainers:trainers, questions:questions}).exec(function(err){
          if(err){
              res.send(500, {error: 'Database Error'});
          }
  
         res.send("success");
      });
  },
  
  
  };
  
  