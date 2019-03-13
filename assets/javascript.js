// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxVnmqd-Xs_7vIlpI4hwpe7qQM1UHetqo",
    authDomain: "first-project-ad62c.firebaseapp.com",
    databaseURL: "https://first-project-ad62c.firebaseio.com",
    projectId: "first-project-ad62c",
    storageBucket: "first-project-ad62c.appspot.com",
    messagingSenderId: "1021863862542"
};
firebase.initializeApp(config);

var database = firebase.database();

//this code creates a user in firebase based off of what they enter in the createuser screen
//18-57
$("#createProfile").on("click", function () {
    event.preventDefault();

    var email = $("#email").val().trim();
    var password = $("#passConfirm").val().trim();
    //below is the field user first enters password in
    var password1 = $("#password").val().trim();

    if (password !== password1) {
        $("#loginMessage").html("<h1>" + "Passwords do not match!" + "</h1>");
    }

    else {

        $("#loginMessage").empty();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(email, password);
            console.log(errorCode);
            console.log(errorMessage);


        });
    }
    console.log(email, password);

});


//this code logs a user in with email/password on click of submit button
//55-68

$("#btnLogin").on("click", function () {
    event.preventDefault();

    var email = $("#uname1").val().trim();
    var password = $("#pwd1").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // //     // Handle Errors here.
        var errorMessage = error.message;
        // ...
        console.log("WRONG");

        if (errorMessage !== "") {
            $("#loginMessage").html("<p>" + "*" + errorMessage + "*" + "<p>");
            console.log("wrong");
        }
        else {
            $("#loginMessage").html("<h1>" + "User Created Successfully" + "</h1>");
            $("#loginMessage").append("<h1>" + "UserName: " + email + "</h1>");
            $("#loginMessage").append("<h1>" + "Password: " + password + "</h1>");
            console.log("K");
        }
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            firebase.database().ref('users/' + user.uid).push({
                username: password,
                email: email
                //some more user data

            });

            console.log(user.uid);
            console.log(email);
            console.log("Logged In");
            //document.location.href = "index.html";
        }

        else {


        }
// this does return the current user ID. Need to retrieve the Email
        $( "adminPage.html" ).ready(function() {
                firebase.auth().onAuthStateChanged(function (user) {
                    var welcome = user.uid;
            
                    if (user) {
            
                        console.log("This should Work" + welcome);
            
                    }
                    else {
                        //         // No user is signed in.
                        //         //$("#working").html("<h1>" + "it aint work" + "</h1>")
                        //         //document.location.href = "index.html";
                        //         //incorrect();
                        console.log("NOPE");
                    }
                console.log( "ready!" );
            })
        })
    });

});




//this code stores user specific data based on their firebase uid
//75-97
/*
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            firebase.database().ref('users/' + user.uid).set({
                username: password,
                email: email
                //some more user data
            });

            console.log(user.uid);
            console.log(email);

        } else {
            // No user is signed in.
            //$("#working").html("<h1>" + "it didnt work" + "</h1>")
            //document.location.href = "index.html";
            incorrect();
        }
    });
*/

