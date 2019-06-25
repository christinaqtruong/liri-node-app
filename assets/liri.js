require("dotenv").config();
var axios = require("axios");

var keys = require("./keys.js");
// var spotify = new spotify(keys.spotify);

var fs = require("fs");

var command = process.argv[2];
var input = process.argv[3];

if (command == 'concert-this'){
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

    console.log(input);

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response){
            console.log(response);
        // console.log("Venue Name: " + response.data);
        }
    ).catch(function(error){
        if (error.response) {
            console.log("-----Data-----");
            console.log(error.response.data);
            console.log("-----Status-----")
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request){
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })

} 
// else if (command == 'spotify-this-song'){

// } 
else if (command == 'movie-this'){
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response){
            console.log("Movie Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Released);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Metascore);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    ).catch(function(error){
        if (error.response) {
            console.log("-----Data-----");
            console.log(error.response.data);
            console.log("-----Status-----")
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request){
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
    
} else if (command == 'do-what-it-says'){
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error){
            return console.log(error);
        }
        console.log(data);


        
    })
} 
