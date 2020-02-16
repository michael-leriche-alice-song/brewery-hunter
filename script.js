const breweryApp = {};

breweryApp.breweryData = function(){ 
    $.ajax('https://api.openbrewerydb.org/breweries',{
        method:"GET",
        dataType:'json'
    }).then(function(){
        console.log('it works')
    })
}

breweryApp.userInput = function(){
    $('button').on('click', function (event) {
        event.preventDefault();
        const userInput = $('form').serializeArray();
        console.log(userInput)
        let userForm = {'specialRequirement':""}
        userInput.forEach(function(index){
            if(index.name === 'city'){
                userForm['city'] = index.value
            }else if(index.name === 'breweryType'){
                userForm['breweryType'] = index.value
            }else{
                userForm['specialRequirement'] = userForm['specialRequirement'] + index.value + ' ';
            }
        })
        // console.log(userForm.specialRequirement)
        
        breweryApp.breweryData()
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