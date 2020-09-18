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
        firebase.database().ref('users/'+ uid + '/champion').on('value', function(winner){
            if(winner.exists()){
                console.log('winner chosen');
                document.getElementById("playoff_div").innerHTML= '';
                document.getElementById("champion_div").innerHTML = '';
                $("#playoff_div").addClass('invisible');
                $("#submitted_div").removeClass('invisible');

                firebase.database().ref('users/'+ uid + '/playoff').on('value', function(team){
                    console.log('fetching playoff teams')
                    team.forEach(function(snapshot){
                        document.getElementById('submitted_playoff').innerHTML+= '<div class="col-md-6 col-12">\
                       <div class="card border-left-dark shadow py-2 player">\
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
                        </div>';
                    });
                });

                firebase.database().ref('users/'+ uid + '/champion').on('value', function(team){
                  team.forEach(function(snapshot){
                    console.log('fetching champion')    
                    document.getElementById('submitted_champion').innerHTML +='And you have chosen '+snapshot.val() +' as the champion team among the above listed playoff teams';
                  });
                });
                
            }
        });
        
      }  // [END_EXCLUDE]
});   

console.log('js loaded');
function ValidatePlayoffSelection (){  
  console.log('validating playoff selection')
    var checkboxes1 = document.getElementsByName("playoff");  
    var numberOfCheckedItems1 = 0;  
    
    for(var i = 0; i < checkboxes1.length; i++)  
    {  
        if(checkboxes1[i].checked)  
            numberOfCheckedItems1++;  
    }
    
    if(numberOfCheckedItems1 != 4)  
    {  
        alert("Please select 4 teams");  
        return false;  
    }
    else{
        alert('Playoff teams chosen, now heading to select the Champion');
        
        ok();
        document.getElementById("playoff_div").innerHTML='';
        $("#champion_div").removeClass('invisible');         
    } 
}

var playoff = [];

function ok(){
  console.log('pushing playoff to array');
    $.each($("input[name='playoff']:checked"), function(){
        playoff.push($(this).val());
    });
    console.log("Choosen playoff teams: " + playoff.join(", "));

    champ(playoff);
}

function champ(playoff){
    var i;
    console.log('fetching playoff data for slecting champion')
    for(i=0; i<playoff.length; i++){
        document.getElementById("champion_inner_div").innerHTML += '<div class="col-md-6 col-12">\
              <div class="card border-left-dark shadow py-2 player">\
                <div class="card-body">\
                  <div class="row no-gutters align-items-center">\
                    <div class="col mr-2">\
                      <label class="row mb-0 font-weight-bold text-gray-800" style="width: 100%;">\
                        <input class="players1" name="champion" type="checkbox" style="position:absolute; right:0;" value="'+playoff[i]+'">'+playoff[i]+'\
                      </label>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>';
     }
    
}


function ValidateChampSelection(){
  console.log('validating champ')
    var checkboxes1 = document.getElementsByName("champion");  
    var numberOfCheckedItems1 = 0;  
 
    for(var i = 0; i < checkboxes1.length; i++)  
    {  
        if(checkboxes1[i].checked)  
            numberOfCheckedItems1++;  
    }  

    if(numberOfCheckedItems1 != 1 )  
    {  
        alert("Please select only 1 team");  
        return false;  
    }
    
    else{
        alert('submitting');
        var myJSON1 = JSON.stringify(playoff);
        console.log(myJSON1);
        var champ_val = $("input[name=champion]:checked").val();
        //contest to be changed here.
        firebase.database().ref('users/'+ uid +'/champion').set({
            0: champ_val
        }).then(function(){
            var i;
            console.log('champ inserted into db')
            firebase.database().ref('users/'+ uid + '/playoff/').set({
                //unable to use loops here.
                0:playoff[0], 1:playoff[1], 2:playoff[2], 3:playoff[3]
            }).then(function(){
            alert ("Responses submitted successfully");
            })
            location.reload();
        });
    }
}      