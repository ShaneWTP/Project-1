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
/*
//18-57
$("#sub").on("click", function () {
    event.preventDefault();

    var email = $("#exampleInputEmail1").val().trim();
    var password = $("#exampleInputPassword1").val().trim();


    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(email, password);
        console.log(errorCode);
        console.log(errorMessage);

        if (errorMessage !== "") {
            $("#worked").html("<h1>" + "SOMETHING IS WRONG " + errorMessage + "</h1>");
            console.log("wrong");
        }
        else {
            $("#1worked").html("<h1>" + "User Created Successfully" + "</h1>");
            $("#1worked").append("<h1>" + "UserName: " + email + "</h1>");
            $("#1worked").append("<h1>" + "Password: " + password + "</h1>");
            console.log("K");
        }

    });

    console.log("vinnie");
    console.log(email, password);
})

*/


//this code logs a user in with email/password on click of submit button
//55-68
/*
$("#subLogin").on("click", function () {
    event.preventDefault();

    var email = $("#exampleInputEmailLogin").val().trim();
    var password = $("#exampleInputPasswordLogin").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // //     // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

    });
})
*/


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
            //$("#working").html("<h1>" + "it aint work" + "</h1>")
            //document.location.href = "index.html";
            incorrect();
        }
    });
*/
