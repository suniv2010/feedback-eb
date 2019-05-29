/**
 * TrainingnamesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function(req, res){
        var training = req.body.training;
        Trainingnames.create({training:training}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
           res.send("success");
        });
      },
      list:async function(req, res){
        Trainingnames.find({}).exec(function(err,trainingnames){
              if(err){
                    res.send(500,{error:'database error'});
              }
              //console.log(questions);
              return res.json(trainingnames)
             // res.send("success", );
              //res.view('questions/list', { questions: questions });
             // res.view('articles/list', articles);
              //res.view('/articles/list',{articles:articles});
          })
            
      }

};

