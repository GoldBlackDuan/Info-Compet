var express = require('express');
var app = express();
var participantRoutes = express.Router();

// Require Item model in our routes module
var Participant = require('../models/participant');

// Defined store route
participantRoutes.route('/add').post(function (req, res) {
  var participant = new Participants(req.body);
   participant.save()
    .then(item => {
    res.status(200).json({'participant': 'Participant added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
participantRoutes.route('/').get(function (req, res) {
   Participant.find(function (err, participants){
    if(err){
      console.log(err);
    }
    else {
      res.json(participants);
    }
  });
});

// Defined edit route
participantRoutes.route('/profilUti/:id').get(function (req, res) {
  var id = req.params.id;
  Participant.findById(id, function (err, participant){
      res.json(participant);
  });
});

//  Defined update route
participantRoutes.route('/update/:id').post(function (req, res) {
   Participant.findById(req.params.id, function(err, participant) {
    if (!participant)
      return next(new Error('Could not load Document'));
    else {
      participant.name = req.body.name;
      participant.price = req.body.price;

      participant.save().then(participant => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
participantRoutes.route('/delete/:id').get(function (req, res) {
   Participant.findByIdAndRemove({_id: req.params.id}, function(err, participant){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = participantRoutes;