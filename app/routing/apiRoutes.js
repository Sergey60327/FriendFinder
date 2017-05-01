var friendsData  = require('../data/friends.js');

var path = require('path');

module.exports = function(app){

app.get('/api/friends', function(req, res){
      res.json(friendsData);
    });

app.post('/api/friends', function(req, res){

var closestMatch = 0;
var maxDiff = 1000;

for (var i = friendsData.length - 1; i >= 0; i--) {

var totalDifference = 0;

for (var j = 0; j < 2; j++ ){

  totalDifference = totalDifference + Math.abs(friendsData[i].scores[j] - req.body.scores[j]);

        }

        if (totalDifference < maxDiff){
          maxDiff = totalDifference;
          closestMatch = i;
        }

        console.log("total difference for " + friendsData[i].name + " is " + totalDifference);

      }


          friendsData.push(req.body);


          res.json({name: friendsData[closestMatch].name, photo: friendsData[closestMatch].photo});

        });

      }
