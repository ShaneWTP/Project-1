
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
    $("#Game1").text(art1.title);

    //next replace the image with one corrisponding to the article
    $("#game-img").css("background-image", "url(" + art1.urlToImage + ")");

    //next change the card-text with the description of the article
    $("#Game2").text(art1.description);

    //lastly add the link to the continue button 
    $("#game1-button").attr('href', art1.url);
    $("#game1-button").on("click", function(){
        $(this).attr('target', '_blank');
    });

    //repeat the steps above for the second article
    $("#game3").text(art2.title);
    $("#game2-img").css("background-image", "url(" + art2.urlToImage + ")");
    $("#game4").text(art2.description);
    $("#game2-button").attr('href', art2.url);
    $("#game2-button").on("click", function(){
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
    $("#trendingTV").text(popular.original_name);
    $("#trendingTV").prepend("Trending on TV: <br>");

    //next apend the overview of the trending movie
    $("#trendingOva").text(popular.overview);

        //next make another var to store the name of the movie
        var TVName = popular.original_name;

        var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + TVName;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(results){
    //next append the poster of that trending movie
    $("#trendingImg").css("background-image","url(" + results.Poster + ")");
    $("#trendingTVLink").attr('href', results.Website);
    $("#trendingTVLink").on("click", function(){
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
    $("#trendingMovie").text(popular.original_title);
    $("#trendingMovie").prepend("Trending Movie: <br>");

    //next apend the overview of the trending movie
    $("#trendingOverview").text(popular.overview);

      //next make another var to store the name of the movie
      var MovieName = popular.original_title;

      var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + MovieName;
            $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(results){
        //next append the poster of that trending movie
        $("#trendingMovieImg").css("background-image","url(" + results.Poster + ")");
        $("#trendingMovieLink").attr('href', results.Website);
        $("#trendingMovieLink").on("click", function(){
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
     $("#review").text(art1.headline);

     //then change the text of the html to fit the description
     $("#reviewOva").text(art1.summary_short);

     //next change the image to one that fits the review
     $("#reviewImg").css("background-image", "url(" + art1.multimedia.src + ")");

     //if the user clicks read me it will load the review in a new page
     $("#reviewLink").attr('href', art1.link.url);
     $("#reviewLink").on("click", function(){
         $(this).attr('target', '_blank');
     });

     //lastly repeat the steps to create a second review
      $("#review2").text(art2.headline);
      $("#reviewOva2").text(art2.summary_short);
      $("#reviewImg2").css("background-image", "url(" + art2.multimedia.src + ")");
      $("#reviewLink2").attr('href', art2.link.url);
      $("#reviewLink2").on("click", function(){
          $(this).attr('target', '_blank');
      });



});

});
