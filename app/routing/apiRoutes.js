var friendsData  = require('../data/friends.js');

var path = require('path');

module.exports = function(app){

app.get('/api/friends', function(req, res){
      res.json(friendsData);
    });

app.post('/api/friends', function(req, res){

var bestMatch = 0;
var bestDiff = 1000;

for (var i = friendsData.length - 1; i >= 0; i--) {

var totalDifference = 0;

for (var k = 0; k < 2; k++ ){

  totalDifference = totalDifference + Math.abs(friendsData[i].scores[k] - req.body.scores[k]);

        }

        if (totalDifference < bestDiff){
          bestDiff = totalDifference;
          bestMatch = i;
        }

        console.log("total difference for " + friendsData[i].name + " is " + totalDifference);

      }


          friendsData.push(req.body);


          res.json({name: friendsData[bestMatch].name, photo: friendsData[bestMatch].photo}); 

        });

      }
