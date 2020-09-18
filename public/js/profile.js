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
        document.getElementById("profile_name").innerHTML= displayName;
        document.getElementById("profile_img").innerHTML= '<img class="img-profile rounded-circle" width="120px" height="120px" style="display: block; margin: auto; margin-top: 40px; margin-bottom: 20px; " src="'+photoURL+'">';

    
        firebase.database().ref('users/'+ uid + '/branch').on('value', function(snapshot){
            if(!snapshot.val()){
                console.log('not filled');
            }
            else{
                console.log('filled');
                document.getElementById('branch_div').innerHTML= snapshot.val();
                $("#submit").addClass('invisible');

            }
        })

            firebase.database().ref('users/'+ uid + '/points').on('value', function(snapshot){
                console.log(snapshot.val())
                document.getElementById('points').innerHTML = snapshot.val();
            });

            firebase.database().ref('users/'+ uid + '/streak_points').on('value', function(snapshot){
                console.log(snapshot.val())
                document.getElementById('streak').innerHTML = snapshot.val();
            })
    }
});

var branch_val ;
function submit(){
    console.log('submit');
    branch_val = document.getElementById('select').value;
    if(!branch_val){
        alert('Please select your branch');
        return false;
    }
    else{
        console.log(branch_val)
        firebase.database().ref('users/'+ uid).update({
            branch: branch_val
        })
        .then(function(){
            alert('SUbmitted Successfully');
            location.reload();
        })
    }
}