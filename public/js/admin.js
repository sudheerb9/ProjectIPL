var contest = 'contest5';
var match = 'match5';
var team1color = 'dark';
var team2color = 'primary';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('user signed in');
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        firebase.database().ref('users/'+ uid + '/acctype').on('value', function(snapshot){
            if(snapshot.val()== 'user') window.location = 'index.html';
        })
    }
});

//match to be changed here 
var matchRef = firebase.database().ref('matches/'+match+'');
matchRef.once("value", function(snapshot) {
    var team1 = snapshot.val().team1;
    var team2 = snapshot.val().team2;
    console.log('fetching img of teams')
    document.getElementById('img_team1').innerHTML = '<img class="img-fluid" style="display:block; margin: auto;" src="img/'+team1+'.png">';
    document.getElementById('img_team2').innerHTML = '<img class="img-fluid" style="display:block; margin: auto;" src="img/'+team2+'.png">';
    console.log('fetching winner_div')
    document.getElementById('winner_div').innerHTML+= '<div class="col-12 col-md-6 offset-md-2">\
                <div class="card border-left-'+team1color+' shadow py-2 player">\
                  <div class="card-body">\
                    <div class="row no-gutters align-items-center">\
                      <div class="col mr-2">\
                        <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input name="winner" type="checkbox" style="position:absolute; right:0;" value='+team1+'">'+team1+'\
                        </label>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
              <div class="col-12 col-md-6 offset-md-2">\
                <div class="card border-left-'+team2color+' shadow py-2 player">\
                  <div class="card-body">\
                    <div class="row no-gutters align-items-center">\
                      <div class="col mr-2">\
                        <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input name="winner"  type="checkbox" style="position:absolute; right:0;" value="'+team2+'">'+team2+'\
                        </label>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>';
                                                   

   var player1Ref =  firebase.database().ref('players/' + team1 +'/Indian Batsmen');
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1_indian_bat').innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="players1" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';

        });
    });

    var player1Ref =  firebase.database().ref('players/' + team1 +'/Indian All Rounders');
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1_indian_all').innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="players1" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';

        });
    });
    var player1Ref =  firebase.database().ref('players/' + team1 +'/Indian Bowlers');
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1_indian_bowl').innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="players1" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';

        });
    });
    var player1Ref =  firebase.database().ref('players/' + team1 +'/Overseas Batsmen');
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1_over_bat').innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="players1" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';

        });
    });

    var player1Ref =  firebase.database().ref('players/' + team1 +'/Overseas All Rounders');
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1_over_all').innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="players1" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';

        });
    });
    var player1Ref =  firebase.database().ref('players/' + team1 +'/Overseas Bowlers');
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1_over_bowl').innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="players1" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';

        });
    });


    var player2Ref =  firebase.database().ref('players/' + team2 +'/Indian Batsmen');
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2_indian_bat').innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="players2" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
        });
    }); 
        var player2Ref =  firebase.database().ref('players/' + team2 +'/Indian All Rounders');
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2_indian_all').innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="players2" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
        });
    });
        var player2Ref =  firebase.database().ref('players/' + team2 +'/Indian Bowlers');
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2_indian_bowl').innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="players2" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
        });
    });

    var player2Ref =  firebase.database().ref('players/' + team2 +'/Overseas Batsmen');
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2_over_bat').innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="players2" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
        });
    }); 
        var player2Ref =  firebase.database().ref('players/' + team2 +'/Overseas All Rounders');
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2_over_all').innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="players2" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
        });
    });
        var player2Ref =  firebase.database().ref('players/' + team2 +'/Overseas Bowlers');
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2_over_bowl').innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="players2" type="checkbox" style="position:absolute; right:0;" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
        });
    });
});  


function ValidateTeamSelection()  
{  
  console.log('validating team selection')
    var checkboxes1 = document.getElementsByName("players1");  
    var numberOfCheckedItems1 = 0;  
    var checkboxes2 = document.getElementsByName("players2");  
    var numberOfCheckedItems2 = 0;  
    for(var i = 0; i < checkboxes1.length; i++)  
    {  
        if(checkboxes1[i].checked)  
            numberOfCheckedItems1++;  
    }
    for(var i = 0; i < checkboxes2.length; i++)  
    {  
        if(checkboxes2[i].checked)  
            numberOfCheckedItems2++;  
    }  

    if(numberOfCheckedItems1 != 11 || numberOfCheckedItems2 != 11)  
    {  
        alert("Please select 11 players from a team");  
        return false;  
    }
    else{
        alert("Playing XI Chosen, Now heading to select Man of the match and winner")
        
        ok();
        document.getElementById("eleven_div").innerHTML='';
        $("#mom_div").removeClass('invisible');         
    } 
}

var finalteam1 = [];
var finalteam2 = [];


function ok(){
  console.log('pushing xi tto array');
    $.each($("input[name='players1']:checked"), function(){
        finalteam1.push($(this).val());
    });
    console.log("Choosen team1: " + finalteam1.join(", "));

    
    $.each($("input[name='players2']:checked"), function(){
        finalteam2.push($(this).val());
    });
    console.log("Choosen team2: " + finalteam2.join(", "));
    mom(finalteam1, finalteam2);
}


function mom(finalteam1, finalteam2){
    var i;
    console.log('fetching data for mom')
    for(i=0; i<finalteam1.length; i++){
        document.getElementById("mom_team1").innerHTML += '<div class="card border-left-'+team1color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="mom" type="checkbox" style="position:absolute; right:0;" value="'+finalteam1[i]+'">'+finalteam1[i]+'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
    }
    for(i=0; i<finalteam2.length; i++){
        document.getElementById("mom_team2").innerHTML += '<div class="card border-left-'+team2color+' shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="mom" type="checkbox" style="position:absolute; right:0;" value="'+finalteam2[i]+'">'+finalteam2[i]+'\
                        </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
    }
    
}

var finalmom;
var finalwinner;

function ValidatemomSelection(){
  console.log('validating mom and winner selection')
    var checkboxes1 = document.getElementsByName("mom");  
    var numberOfCheckedItems1 = 0;  
    var checkboxes2 = document.getElementsByName("winner");  
    var numberOfCheckedItems2 = 0;  
    for(var i = 0; i < checkboxes1.length; i++)  
    {  
        if(checkboxes1[i].checked)  
            numberOfCheckedItems1++;  
    }
    for(var i = 0; i < checkboxes2.length; i++)  
    {  
        if(checkboxes2[i].checked)  
            numberOfCheckedItems2++;  
    }  

    if(numberOfCheckedItems1 != 1 || numberOfCheckedItems2 != 1)  
    {  
        alert("Please select only 1 Man of the Match and 1 winner");  
        return false;  
    }
    else {
        finalmom = $("input[name=mom]:checked").val();
        finalwinner = $("input[name=winner]:checked").val();
        getLeaderBoard();
    }
}



var result_array;
var arr;
var len;
var item;
var assoc;

var flag = 0;
function getLeaderBoard(){
    console.log('Hi');
  var usersRef = firebase.database().ref('users/');
    usersRef.once("value", function(snapshot) {    
    snapshot.forEach(function(Snapshot){
    
        firebase.database().ref('users/'+ Snapshot.key + '/'+contest +'/winner').on('value', function(winner){
            var points=0;
            var streak;
            var streak_hault;
            var team1=[];
            var team2=[];
            var streakRef = firebase.database().ref('users/'+ Snapshot.key + '/streak_points');
              streakRef.once("value", function(streakpoints) {      
                  streak = streakpoints.val()
                  console.log('Function streakpoints '+ streak);
              })
                 var streakhaultRef = firebase.database().ref('users/'+ Snapshot.key + '/streak_hault');
                  streakhaultRef.once("value", function(streakhault) {      
                      streak_hault = streakhault.val()
                      console.log('Function streakhault '+ streak_hault);
                
              })
              .then(function(){
            if(winner.exists()){

                var team1Ref = firebase.database().ref('users/'+ Snapshot.key + '/'+contest +'/team111');
                team1Ref.once("value", function(team) {
                    team.forEach(function(players) {
                        console.log('Pushing team1 11');
                        team1.push(players.val());
                    })
                    console.log('Team1 11 pushed');
                }).then(function(){
                    var team2Ref = firebase.database().ref('users/'+ Snapshot.key + '/'+contest +'/team211');
                    team2Ref.once("value", function(team) {
                        team.forEach(function(players) {
                            console.log('Pushing team 2 11');
                            team2.push(players.val());
                        })
                        console.log('Team2 11 pushed');
                    }).then(function(){
                        result_array = [];
                        arr = team1.concat(finalteam1);
                        len = arr.length;
                        assoc = {};
                        console.log('team1'+len);
                        while(len--) {
                            item = arr[len];

                            if(!assoc[item]) 
                            { 
                                result_array.unshift(item);
                                assoc[item] = true;
                            }
                        }
                        console.log('team1 '+ result_array);
                        points += 11- result_array.length + 11;
                        console.log('team1 points '+ points);
                        result_array = [];
                        arr = team2.concat(finalteam2);
                        len = arr.length;
                        assoc = {};
                        console.log('team2'+len);
                        while(len--) {
                            item = arr[len];

                            if(!assoc[item]) 
                            { 
                                result_array.unshift(item);
                                assoc[item] = true;
                            }
                        }
                        console.log('team2 '+ result_array);
                        points += 11- result_array.length + 11;
                        console.log('team2 points '+ points);
                    })
                  .then(function(){
                    if(streak<15){
                        points += streak;
                        streak += 1;
                    } 
                    console.log('Final points of '+ Snapshot.key+ ' is'+ points);
                    }).then(function(){
                      console.log('played streak updated '+ streak);
                      firebase.database().ref('users/'+ Snapshot.key).update({
                          streak_points: streak,
                          streak_hault:0
                      })
                    
                    .then(function(){
                        firebase.database().ref('users/'+ Snapshot.key +'/'+contest).update({
                            contestpoints: points
                        })
                        console.log('played contestpoints updated '+ points);
                    })
                    .then(function(){
                        var totalpointsRef = firebase.database().ref('users/'+ Snapshot.key + '/points');
                        totalpointsRef.once("value", function(totalpoints) {      
                            console.log('totalpoints');
                            finalpoints = totalpoints.val() + points;
                        }).then(function(){
                            firebase.database().ref('users/'+ Snapshot.key ).update({
                                points: finalpoints
                            })
                            console.log('played points updated '+ finalpoints);
                        })
                    })
              })
               
            })
            }
            else{
                console.log('Player '+ Snapshot.key+ ' hasnt participated in the contest');
                if(streak_hault==1){
                    streak = 0;
                    streak_hault = 0;
                }
                else if (streak_hault == 0){
                    streak = Math.floor(streak/2);
                    streak_hault = 1;
                }
                console.log('Player '+ Snapshot.key+ ' streak points '+ streak + ' ,streak hault is '+ streak_hault);
                
                firebase.database().ref('users/'+ Snapshot.key).update({
                    streak_points: streak,
                    streak_hault: streak_hault
                })
                
                .then(function(){
                    console.log('not played streak updated '+ streak);
                    console.log('not played streak hault updated '+ streak_hault);
                    firebase.database().ref('users/'+ Snapshot.key +'/'+contest).update({
                        contestpoints: 0
                    })
                    console.log('not played contestpoints updated '+ points);
                })
            }
          })
        })
    })
  })
  .then(function(){
    console.log('over');
  })
}
