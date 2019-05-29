/**
 * TrainingnamesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function(req, res){
        var trainers = req.body.trainers;
        Trainernames.create({trainers:trainers}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      },
      list:async function(req, res){
        Trainernames.find({}).exec(function(err,trainernames){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainernames)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      }

};

