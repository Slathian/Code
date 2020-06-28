var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (player in players) {
    console.log(players[player]);
  }
  
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
  players.forEach(function(element) {
    console.log(element);
  });

//   How to loop through js items #################################################################################################################################################
// THESE ARE FOR METHODS KINDA THE SAME AS WHAT WE USE IN PYTHON
// Arrow function confusion coming later as we work our way into new chapters
var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }

//   Guide to while and do loops #################################################################################################################################################

var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;
  while (i < players.length) {
    console.log(players[i]);
    i++;
  }
  
  var i = 21;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length)