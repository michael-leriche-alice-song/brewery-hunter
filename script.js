const breweryApp = {};

breweryApp.userInput = function(){
    $('button').on('click', function (event) {
        event.preventDefault();
        const userInput = $('form').serializeArray();
        console.log(userInput)
    })
}

breweryApp.init = function(){
    breweryApp.userInput()
}

//document ready
$(function(){
    breweryApp.init();
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