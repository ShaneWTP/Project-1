$("#showBTN").on("click", function(event){
    event.preventDefault();
    var searched = $("#showSearch").val().trim();
    var queryURL = "https://newsapi.org/v2/everything?language=en&q="+ searched +"&apiKey=31fe7ee7a6e64376b315d74a2882a128";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        for (var i = 1; i < 7; i++){
            var result = response.articles[i];
            $("#header"+ i ).text(result.title);
            $("#img" + i ).css("background-image", "url(" + result.urlToImage + ")");
            $("#OVA" + i).text(result.description);
            $("#button" + i).attr('href', result.url);
            $("#button" + i).on("click", function(){
                $(this).attr('target', '_blank');
            });

        };
    });

    $("#showSearch").val("");
});

$("#gameBTN").on("click", function(event){
    event.preventDefault();
    var searched = $("#gameSearch").val().trim();
    var queryURL = "https://newsapi.org/v2/everything?language=en&sources=polygon,ign&q=" + searched +"&apiKey=31fe7ee7a6e64376b315d74a2882a128";

 $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        for (var i = 1; i < 7; i++){
            var result = response.articles[i];
            $("#header"+ i ).text(result.title);
            $("#img" + i ).css("background-image", "url(" + result.urlToImage + ")");
            $("#OVA" + i).text(result.description);
            $("#button" + i).attr('href', result.url);
            $("#button" + i).on("click", function(){
                $(this).attr('target', '_blank');
            });

        };
    });

    $("#gameSearch").val("");
});

$("#movieBTN").on("click", function(event){
    event.preventDefault();
   var searched =  $("#movieSearch").val().trim();
   var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=e03904a8c30bca382b1315442046ab16&query=" + searched; 
   
   $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    var id = response.results[0].id
    $("#movieSearch").val("");

    var queryURL2 = "https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=e03904a8c30bca382b1315442046ab16&language=en-US&page=1";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(result);
              for (var i = 1; i < 4; i++){
                var result = response.results[i];
                $("#header"+ i ).text(searched + " review: number " + i );
                $("#img" + i ).css("background-image", "url(http://www.softteco.com/blog/wp-content/uploads/2017/12/123.jpg)");
                $("#OVA" + i).text(result.content);
                $("#button" + i).attr('href', result.url);
                
                $("#button" + i).on("click", function(){
                    $(this).attr('target', '_blank');
                });

            };
        });
        
    })
    var queryURL3 = "https://newsapi.org/v2/everything?language=en&q="+ searched +"&apiKey=31fe7ee7a6e64376b315d74a2882a128";
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function(results){
        for (var i = 4; i < 7; i++){
            var result = results.articles[i];
            $("#header"+ i ).text(result.title);
            $("#img" + i ).css("background-image", "url(" + result.urlToImage + ")");
            $("#OVA" + i).text(result.description);
            $("#button" + i).attr('href', result.url);
            $("#button" + i).on("click", function(){
                $(this).attr('target', '_blank');
            });

        };
    })
});

