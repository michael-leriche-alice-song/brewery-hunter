const movieApp = {
    api_key: '3058422e0d59745070d03d9b781c0d40'
};

movieApp.displayMovie = function(listOfMovies){
    listOfMovies.forEach(function(movie){
        // console.log(movie);
        // const title = $('<h3>').text(movie.original_title)
        // console.log(title)
    })
}

movieApp.movieData = function (language, genre, releaseDecade, runtime){ 
    $.ajax('https://api.themoviedb.org/3/discover/movie?',{
        method:"GET",
        dataType:'json',
        data:{
            api_key:movieApp.api_key,
            with_original_language: language,
            with_genres: genre,
            year: releaseDecade,
            witn_runtime: runtime
        }
    }).then(function(result){
        movieApp.displayMovie(result.results)
        //get a array of movies that meets the stardards
    })
}
//the thing is I cannot come up with way that allow me find multiple year at a time


movieApp.userInput = function(){
    $('button').on('click', function (event) {
        event.preventDefault();
        const userInput = $('form').serializeArray();
        console.log(userInput.length)
        const language = userInput[0].value
        const genre = userInput[1].value
        const releaseDecade = userInput[2].value 
        const runtime = userInput[3].value
        movieApp.movieData(language, genre, releaseDecade, runtime)
    })
}

movieApp.init = function(){
    movieApp.userInput()
}

//document ready
$(function(){
    movieApp.init();
})


/*
-https://api.openbrewerydb.org/breweries?by_city=Alameda&brewery_type=micro
-this works, this api allows us use multiple filters at the same time
-use ajax to retrieve data. probably use multiple q to get data 
-if array.length > 5
    random get 5
-else 
    return all 

ul.append()


*/