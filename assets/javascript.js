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
$("#createProfile").on("click", function () {
    event.preventDefault();

    var email = $("#email").val().trim();
    var password = $("#passConfirm").val().trim();
    var firstName = $("#lastName").val()
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
        });
        $("#loginMessageNew").text("User Created Successfully. Please log in below!");
    }

    //creating db object 
    var n = {
        name: firstName
    };
    //pushing object to db
    firebase.database().ref().push(n)
});


//this code logs a user in with email/password on click of submit button
$("#btnLogin").on("click", function () {
    event.preventDefault();

    var email = $("#uname1").val().trim();
    var password = $("#pwd1").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // //     // Handle Errors here.
        var errorMessage = error.message;
        // ...
        if (errorMessage !== "") {
            $("#loginMessage").html("<p>" + "***" + errorMessage + "<p>");
        }
        else {
            $("#loginMessage").html("<h1>" + "User Created Successfully" + "</h1>");
            $("#loginMessage").append("<h1>" + "UserName: " + email + "</h1>");
            $("#loginMessage").append("<h1>" + "Password: " + password + "</h1>");
        }
    });
    //Store user email in database 
    //Ideally we would store each users email under their own unique auth ID, 
    //but for our Demo purpose we will just set one email in the DB

    //creating db object 
    var user = {
        uemail: email
    };
    //pushing object to db
    firebase.database().ref().push(user)

    //directing user to home page when login is successful 
    document.location.href = "index.html";

    // var uname = childSnapshot.val().name;

});

// this does return the current user ID. Need to retrieve the Email
$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        var welcome = user.uid;
        if (user) {
            database.ref().on("child_added", function (childSnapshot) {
                var uEmail = childSnapshot.val().uemail;
                //the below returns our test users email that is stored in the db
                //will need to change the div that it hooks on to
                $("#username").html("<h1>" + "Hello, " + uEmail + "!" + "</h1>");
                $("#welcome").html("<p>" + "Welcome, " + uEmail + "!" + "</p>");
            })
        }
        else {
            console.log("NOPE");
        }
    })
})

// //this is where the user's search history will be stored in the db
$("#movieBtn").on("click", function () {
    event.preventDefault();
    var movie = $("#movieSearch").val().trim();
    var searchMov = {
        movies: movie,
    }
    firebase.database().ref().push(searchMov);
    console.log(movie);
})

$("#showsBtn").on("click", function () {
    var show = $("#showsSearch").val().trim();
    event.preventDefault();
    var searchShow = {
        shows: show,
    }
    firebase.database().ref().push(searchShow);
    console.log(searchShow);

})

$("#gamesBtn").on("click", function () {
    var game = $("#gamesSearch").val();
    event.preventDefault();
    var searchGame = {
        games: game
    }
    firebase.database().ref().push(searchGame);
    console.log(searchGame);

})

database.ref().on("child_added", function (childSnapshot) {
    var dbMovie = childSnapshot.val().movies;
    var dbTv = childSnapshot.val().show;
    var dbGame = childSnapshot.val().game;

    (console.log(dbMovie));
    (console.log(dbTv));
    (console.log(dbGame));

    var newRowMov = $("<tr>").append(
        $("<td>").text(dbMovie)
    );
    $("#movieHistory").append(newRowMov);

    var newRowTv = $("<tr>").append(
        $("<td>").text(dbTv)
    );
    $("#showsHistory").append(newRowTv);

    var newRowGame = $("<tr>").append(
        $("<td>").text(dbGame)
    );
    $("gamesHistory").append(newRowGame);
})

//need to create elements to be used in the tables on the user profile page 


