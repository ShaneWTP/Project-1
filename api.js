
$(document).ready(function(){

//first call the game article api to replace 2 cards on the home page with two relevant titles about games
//API key for the NewsApi.org 
var APIkey1 = "31fe7ee7a6e64376b315d74a2882a128";
//the link for the ajax call to access
var NewsLink = "https://newsapi.org/v2/top-headlines?sources=ign,polygon&apiKey=" + APIkey1;

//call the api to get information to then push it to the page
//----------------------------------------IGN AND POLYGON-------------------------
$.ajax({
    url: NewsLink,
    method: "GET"
}).then(function(response){
    //first create 2 random numbers to find two random articles
    var rand1 = Math.floor(Math.random()*5);
    var rand2 = Math.floor(Math.random()*11)+6;

    //next grab two random articles and store them in variables
    var art1 = response.articles[rand1];
    var art2 = response.articles[rand2];
    
    //next change the the card-title of one to the title of an article
    $("#header1").text(art1.title);

    //next replace the image with one corrisponding to the article
    $("#img1").css("background-image", "url(" + art1.urlToImage + ")");

    //next change the card-text with the description of the article
    $("#OVA1").text(art1.description);

    //lastly add the link to the continue button 
    $("#button1").attr('href', art1.url);
    $("#button1").on("click", function(){
        $(this).attr('target', '_blank');
    });

    //repeat the steps above for the second article
    $("#header6").text(art2.title);
    $("#img6").css("background-image", "url(" + art2.urlToImage + ")");
    $("#OVA6").text(art2.description);
    $("#button6").attr('href', art2.url);
    $("#button6").on("click", function(){
        $(this).attr('target', '_blank');
    });
    
})

//--------------------------------------------MOVIE REVIEWS AND TRENDING-----------------------------------------------

//link the ajax call will use to grab trending tv shows
trendsLink = "https://api.themoviedb.org/3/trending/tv/day?api_key=e03904a8c30bca382b1315442046ab16";

$.ajax({
    url: trendsLink,
    method: "GET"
}).then(function(response){
   
    
    //grab the most popular item
    var popular = response.results[0];
    //next apend the title of the trending movie to a card
    $("#header2").text(popular.original_name);
    $("#header2").prepend("Trending on TV: <br>");

    //next apend the overview of the trending movie
    $("#OVA2").text(popular.overview);

        //next make another var to store the name of the movie
        var TVName = popular.original_name;

        var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + TVName;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(results){
            
    //next append the poster of that trending movie
    $("#img2").css("background-image","url(" + results.Poster + ")");
    $("#button2").attr('href', results.Poster);
    $("#button2").on("click", function(){
        $(this).attr('target', '_blank');
    });
    });
});

//link for trending movies
trendsLink2 = "https://api.themoviedb.org/3/trending/movie/day?api_key=e03904a8c30bca382b1315442046ab16";
$.ajax({
    url: trendsLink2,
    method: "GET"
}).then(function(response){
   
    //grab the most popular item
    var popular = response.results[0];
    
    //next apend the title of the trending movie to a card
    $("#header4").text(popular.original_title);
    $("#header4").prepend("Trending Movie: <br>");

    //next apend the overview of the trending movie
    $("#OVA4").text(popular.overview);

      //next make another var to store the name of the movie
      var MovieName = popular.original_title;

      var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + MovieName;
            $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(results){
        //next append the poster of that trending movie
        $("#img4").css("background-image","url(" + results.Poster + ")");
        $("#button4").attr('href', results.Website);
        $("#button4").on("click", function(){
            $(this).attr('target', '_blank');
        });
  });
});

//================================NYTimes MOVIE REVIEWS=======================

var queryURL ="https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=D0aORjYxSYjihO8QnG86bs1yQJ5QfQpC";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    //create two random numbers to grab two different random indexes
    var rand1 = Math.floor(Math.random()*10);
    var rand2 = Math.floor((Math.random()*10)+10);
    
    //next create a variable to hold the two random numbers at the results array
     var art1 = response.results[rand1];
     var art2 = response.results[rand2];

     //next grab the title of the review and display it in html
     $("#header3").text(art1.headline);

     //then change the text of the html to fit the description
     $("#OVA3").text(art1.summary_short);

     //next change the image to one that fits the review
     $("#img3").css("background-image", "url(" + art1.multimedia.src + ")");

     //if the user clicks read me it will load the review in a new page
     $("#button3").attr('href', art1.link.url);
     $("#button3").on("click", function(){
         $(this).attr('target', '_blank');
     });

     //lastly repeat the steps to create a second review
      $("#header5").text(art2.headline);
      $("#OVA5").text(art2.summary_short);
      $("#img5").css("background-image", "url(" + art2.multimedia.src + ")");
      $("#button5").attr('href', art2.link.url);
      $("#button5").on("click", function(){
          $(this).attr('target', '_blank');
      });



});

});
