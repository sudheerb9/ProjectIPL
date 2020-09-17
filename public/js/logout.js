function toggleSignIn() {
    if (!firebase.auth().currentUser) {
    // [START createprovider]
    var provider = new firebase.auth.GoogleAuthProvider();
    // [END createprovider]
    // [START addscopes]
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    // [END addscopes]
    // [START signin]
    firebase.auth().signInWithRedirect(provider);
    // [END signin]

    } else {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
    }
    // [START_EXCLUDE]
    // [END_EXCLUDE]
}
    // [END buttoncallback]


var database = firebase.database();

function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            // window.location = 'home.html';
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            var userRef = firebase.database().ref('users/' + uid);
            userRef.once("value", function(snapshot) {
                console.log('hi' + displayName);
                document.getElementById('name').innerHTML = displayName;
                document.getElementById('userDropdown').innerHTML += '<img class="img-profile rounded-circle" src="'+photoURL+'">';
                //use photoURL email

            });    
            
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            window.location = 'index.html';
            // [START_EXCLUDE]
            
            // [END_EXCLUDE]
        }
        // [START_EXCLUDE]
        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
}

window.onload = function() {
    initApp();
};