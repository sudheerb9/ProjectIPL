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
    // Result from Redirect auth flow.
    // [START getidptoken]
    firebase.auth().getRedirectResult().then(function(result) {
    // The signed-in user info.
    var user = result.user;
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // [START_EXCLUDE]
    if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have already signed up with a different auth provider for that email.');
        // If you are using multiple auth providers on your app you should handle linking
        // the user's accounts here.
    } else {
        console.error(error);
    }
    // [END_EXCLUDE]
    });
    // [END getidptoken]


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            
            firebase.database().ref('users/' + uid).set({
                name: displayName,
                email: email,
                photoURL: photoURL,
                }).then(function(){
                alert('Welcome' + displayName + '!');
                window.location.href = 'home.html';
            });
             console.log(" not entered");
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // window.location = 'index.html';
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