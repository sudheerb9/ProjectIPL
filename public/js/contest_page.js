var uid;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in. 
        console.log('user signed in');
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
        firebase.database().ref('users/'+ uid + '/contest1/winner').on('value', function(winner){
            if(winner.exists()){
                console.log('winner chosen');
                document.getElementById("eleven_div").innerHTML='';
                document.getElementById("mom_div").innerHTML='';
                $("#eleven_div").addClass('invisible');

                $("#submitted_div").removeClass('invisible');

                firebase.database().ref('users/'+ uid + '/contest1/team111').on('value', function(team){
                  console.log('fetching team 1 11')
                    team.forEach(function(snapshot){
                        document.getElementById('submitted_team1').innerHTML+= '\
                       <div class="card border-left-primary shadow py-2 player">\
                            <div class="card-body">\
                              <div class="row no-gutters align-items-center">\
                                <div class="col mr-2">\
                                  <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                                    '+ snapshot.val() +'\
                                  </label>\
                                </div>\
                              </div>\
                            </div>\
                          </div>\
                        ';
                    });
                });

                firebase.database().ref('users/'+ uid + '/contest1/team211').on('value', function(team){
                    console.log('team 2 11');
                    team.forEach(function(snapshot){
                        document.getElementById('submitted_team2').innerHTML+='\
                        <div class="card border-left-warning shadow py-2 player">\
                            <div class="card-body">\
                              <div class="row no-gutters align-items-center">\
                                <div class="col mr-2">\
                                  <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                                    '+ snapshot.val() +'\
                                  </label>\
                                </div>\
                              </div>\
                            </div>\
                          </div>\
                        ';
                    });
                });
                
                firebase.database().ref('users/'+ uid + '/contest1/winner').on('value', function(snapshot){
                    console.log('fetching winner')
                    document.getElementById('submitted_win').innerHTML+='Your winning team is '+snapshot.val()+'<br>'
                        
                });

                firebase.database().ref('users/'+ uid + '/contest1/mom').on('value', function(snapshot){
                    console.log('fetching mom')
                    document.getElementById('submitted_mom').innerHTML+='Your Man of the Match player is '+snapshot.val()+'<br>'
                        
                });
            }
        });
        
        // [END_EXCLUDE]
    }
});

//match to be changed here 
var matchRef = firebase.database().ref('matches/match1');
matchRef.once("value", function(snapshot) {
    var team1 = snapshot.val().team1;
    var team2 = snapshot.val().team2;
    console.log('fetching img of teams')
    document.getElementById('img_team1').innerHTML = '<img class="img-fluid" style="display:block; margin: auto;" src="img/'+team1+'.png">';
    document.getElementById('img_team2').innerHTML = '<img class="img-fluid" style="display:block; margin: auto;" src="img/'+team2+'.png">';
    console.log('fetching winner_div')
    document.getElementById('winner_div').innerHTML+= '<div class="col-12 col-md-6">\
                <div class="card border-left-warning shadow py-2 player">\
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
              <div class="col-12 col-md-6">\
                <div class="card border-left-primary shadow py-2 player">\
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
                                                   

    var player1Ref =  firebase.database().ref('players/' + team1);
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team1');
            document.getElementById('players_team1').innerHTML += '<div class="card border-left-primary shadow py-2 player">\
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

    var player2Ref =  firebase.database().ref('players/' + team2);
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('fetching squad team2');
            document.getElementById('players_team2').innerHTML += '<div class="card border-left-warning shadow py-2 player">\
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

var team1 = [];
var team2 = [];


function ok(){
  console.log('pushing xi tto array');
    $.each($("input[name='players1']:checked"), function(){
        team1.push($(this).val());
    });
    console.log("Choosen team1: " + team1.join(", "));

    
    $.each($("input[name='players2']:checked"), function(){
        team2.push($(this).val());
    });
    console.log("Choosen team2: " + team2.join(", "));
    mom(team1, team2);
}


function mom(team1, team2){
    var i;
    console.log('fetching data for mom')
    for(i=0; i<team1.length; i++){
        document.getElementById("mom_team1").innerHTML += '<div class="card border-left-primary shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="mom" type="checkbox" style="position:absolute; right:0;" value="'+team1[i]+'">'+team1[i]+'\
                        <div class="col-auto ml-auto">\
                          <i class="fas fa-plus text-gray-300"></i>\
                        </div>\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
    }
    for(i=0; i<team2.length; i++){
        document.getElementById("mom_team2").innerHTML += '<div class="card border-left-warning shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players2" name="mom" type="checkbox" style="position:absolute; right:0;" value="'+team2[i]+'">'+team2[i]+'\
                        <div class="col-auto ml-auto">\
                          <i class="fas fa-plus text-gray-300"></i>\
                        </div>\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>';
    }
    
}

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
    
    else{
        alert('submitting');
        var myJSON1 = JSON.stringify(team1);
        var myJSON2 = JSON.stringify(team2);
        console.log(myJSON1);
        var mom_val = $("input[name=mom]").val();
        var win_val = $("input[name=winner]").val();
        //contest to be changed here.
        firebase.database().ref('users/'+ uid + '/contest1').set({
            mom: mom_val,
            winner: win_val
        }).then(function(){
            var i;
            console.log('mom winner inserted in db')
            firebase.database().ref('users/'+ uid + '/contest1/team111').set({
                //unable to use loops here.
                0:team1[0], 1:team1[1], 2:team1[2], 3:team1[3], 4:team1[4], 5:team1[5], 6:team1[6], 7:team1[7], 8:team1[8], 9:team1[9], 10:team1[10]
            }).then(function(){
               firebase.database().ref('users/'+ uid + '/contest1/team211').set({
                0:team2[0], 1:team2[1], 2:team2[2], 3:team2[3], 4:team2[4], 5:team2[5], 6:team2[6], 7:team2[7], 8:team2[8], 9:team2[9], 10:team2[10]
                })
            })
            alert ("Responses submitted successfully");
            location.reload();
        });
    }
}      