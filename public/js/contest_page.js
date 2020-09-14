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
                console.log('winner chosen')
                $("#match_div").addClass('invisible');

                firebase.database().ref('users/'+ uid + '/contest1/team111').on('value', function(team){
                    team.forEach(function(snapshot){
                        document.getElementById('submitted_div').innerHTML+='<div class="col-6"><p>'+snapshot.val()+'</p></div>'
                    });
                });

                firebase.database().ref('users/'+ uid + '/contest1/team211').on('value', function(team){
                    team.forEach(function(snapshot){
                        document.getElementById('submitted_div').innerHTML+='<div class="col-6"><p>'+snapshot.val()+'</p></div>'
                    });
                });
                
                firebase.database().ref('users/'+ uid + '/contest1/winner').on('value', function(snapshot){
                    
                    document.getElementById('submitted_div').innerHTML+='<div class="col-12"><p>your winning team is '+snapshot.val()+'</p></div><br>'
                        
                });

                firebase.database().ref('users/'+ uid + '/contest1/mom').on('value', function(snapshot){
                    
                    document.getElementById('submitted_div').innerHTML+='<divclass="col-12"><p>your man of the match player is '+snapshot.val()+'</p></div><br>'
                        
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
    document.getElementById('match').innerHTML = team1 + 'vs' + team2;
    document.getElementById('winner').innerHTML+= '<option value="'+team1+'">'+team1+'</option>\
                                                   <option value="'+team2+'">'+team2+'</option>';

    var player1Ref =  firebase.database().ref('players/' + team1);
    player1Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('team1');
            document.getElementById('team-1').innerHTML += '<label>\
              <input class="players1" name="players1" type="checkbox" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'</label><br>';
        });
    });       

    var player2Ref =  firebase.database().ref('players/' + team2);
    player2Ref.once("value", function(snapshot) {
        snapshot.forEach(function(playerSnapshot) {
            console.log('team2');
            document.getElementById('team-2').innerHTML += '<label>\
              <input class="players2" name="players2" type="checkbox" value="'+ playerSnapshot.val() +'">'+ playerSnapshot.val() +'</label><br>';
        });
    }); 
});  

function ValidateTeamSelection()  
{  
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

    if(numberOfCheckedItems1 != 11 && numberOfCheckedItems2 != 11)  
    {  
        alert("Please select 11 players from a team");  
        return false;  
    }
    else ok(); 
}

var team1 = [];
var team2 = [];

function ok(){

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
    for(i=0; i<team1.length; i++){
        document.getElementById("select").innerHTML += '<option value="'+team1[i]+'">'+team1[i]+'</option>';
    }
    for(i=0; i<team2.length; i++){
        document.getElementById("select").innerHTML += '<option value="'+team2[i]+'">'+team2[i]+'</option>';
    }
    $("#mom").removeClass('invisible');
    $("#mom_submit").removeClass('invisible');
}


function ValidatemomSelection(){
    console.log('select val: '+ $("select[name=mom]").val() );
    if($("select[name=mom]").val()== null || $("select[name=winner]").val()== null ){
        alert('Please select all the fields');
        return false ; 
    } 

    else{
        alert('submitting');
        var myJSON1 = JSON.stringify(team1);
        var myJSON2 = JSON.stringify(team2);
        console.log(myJSON1);
        var mom_val = $("select[name=mom]").val();
        var win_val = $("select[name=winner]").val();
        //contest to be changed here.
        firebase.database().ref('users/'+ uid + '/contest1').set({
            team111: myJSON1,
            team211: myJSON2,
            mom: mom_val,
            winner: win_val
        }).then(function(){
            var i;
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